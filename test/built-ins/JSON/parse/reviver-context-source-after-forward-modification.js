// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.parse
description: >
  JSON.parse reviver is called without "source" for modified properties unless
  they have been restored to original values.
info: |
  JSON.parse ( _text_ [ , _reviver_ ] )
  1. Let _jsonString_ be ? ToString(_text_).
  2. Let _parseResult_ be ? ParseJSON(_jsonString_).
  3. Let _unfiltered_ be _parseResult_.[[Value]].
  4. If IsCallable(_reviver_) is *true*, then
    a. Let _root_ be OrdinaryObjectCreate(%Object.prototype%).
    b. Let _rootName_ be the empty String.
    c. Perform ! CreateDataPropertyOrThrow(_root_, _rootName_, _unfiltered_).
    d. Let _snapshot_ be <emu-meta suppress-effects="user-code">CreateJSONParseRecord(_parseResult_.[[ParseNode]], _rootName_, _unfiltered_)</emu-meta>.
    e. Return ? InternalizeJSONProperty(_root_, _rootName_, _reviver_, _snapshot_).

  InternalizeJSONProperty ( _holder_, _name_, _reviver_, _parseRecord_ )
  1. Let _val_ be ? Get(_holder_, _name_).
  2. Let _context_ be OrdinaryObjectCreate(%Object.prototype%).
  3. If _parseRecord_ is a JSON Parse Record and SameValue(_parseRecord_.[[Value]], _val_) is *true*, then
    a. If _val_ is not an Object, then
      i. Let _parseNode_ be _parseRecord_.[[ParseNode]].
      ii. Assert: _parseNode_ is not an |ArrayLiteral| Parse Node and not an |ObjectLiteral| Parse Node.
      iii. Let _sourceText_ be the source text matched by _parseNode_.
      iv. Perform ! CreateDataPropertyOrThrow(_context_, *"source"*, CodePointsToString(_sourceText_)).
    b. Let _elementRecords_ be _parseRecord_.[[Elements]].
    c. Let _entryRecords_ be _parseRecord_.[[Entries]].
  4. Else,
    a. Let _elementRecords_ be a new empty List.
    b. Let _entryRecords_ be a new empty List.
  5. If _val_ is an Object, then
    a. Let _isArray_ be ? IsArray(_val_).
    b. If _isArray_ is *true*, then
      ...
      iv. Repeat, while _I_ &lt; _len_,
        1. Let _prop_ be ! ToString(𝔽(_I_)).
        2. If _I_ &lt; _elementRecordsLen_, let _elementRecord_ be _elementRecords_[_I_]. Otherwise, let _elementRecord_ be ~empty~.
        3. Let _newElement_ be ? InternalizeJSONProperty(_val_, _prop_, _reviver_, _elementRecord_).
        ...
    c. Else,
      i. Let _keys_ be ? EnumerableOwnProperties(_val_, ~key~).
      ii. For each String _P_ of _keys_, do
        1. Let _entryRecord_ be the element of _entryRecords_ whose [[Key]] field is _P_. If there is no such element, set _entryRecord_ to ~empty~.
        2. Let _newElement_ be ? InternalizeJSONProperty(_val_, _P_, _reviver_, _entryRecord_).
        ...
  6. Return ? Call(_reviver_, _holder_, « _name_, _val_, _context_ »).

includes: [compareArray.js]
features: [json-parse-with-source]
---*/

var log = [];
function overwritingReviver(key, value, context) {
  log.push('[' + key + ']: ' + JSON.stringify(value) + ' from |' + context.source + '|');
  if (value === 'start') {
    // Add new properties.
    this[1].added = true;
    this[2].push('added');
  } else if (value === 'obj') {
    // Replace properties of this object.
    this.toObj = {};
    this.toPrim = 2;
    this.toClone = this.toClone.slice();
    this.toOtherPrim = 4;
  } else if (value === 'arr') {
    // Replace elements of this array.
    this[1] = {};
    this[2] = 2;
    this[3] = this[3].slice();
    this[4] = 4;
  }
  return value;
}
var overwriteResult = JSON.parse(
  '[ ' +
    '"start", ' +
    '{ "0": "obj", "toObj": 1, "toPrim": {}, "toClone": ["clone me"], "toOtherPrim": "four" }, ' +
    '["arr", 1, {}, ["clone me"], "four"] ' +
  ']',
  overwritingReviver
);
var expectObjJson = '{"0":"obj","toObj":{},"toPrim":2,"toClone":["clone me"],"toOtherPrim":4,"added":true}';
var expectArrJson = '["arr",{},2,["clone me"],4,"added"]';
assert.compareArray(log, [
  '[0]: "start" from |"start"|',

  '[0]: "obj" from |"obj"|',
  '[toObj]: {} from |undefined|',
  '[toPrim]: 2 from |undefined|',
  '[0]: "clone me" from |undefined|',
  '[toClone]: ["clone me"] from |undefined|',
  '[toOtherPrim]: 4 from |undefined|',
  '[added]: true from |undefined|',
  '[1]: ' + expectObjJson + ' from |undefined|',

  '[0]: "arr" from |"arr"|',
  '[1]: {} from |undefined|',
  '[2]: 2 from |undefined|',
  '[0]: "clone me" from |undefined|',
  '[3]: ["clone me"] from |undefined|',
  '[4]: 4 from |undefined|',
  '[5]: "added" from |undefined|',
  '[2]: ' + expectArrJson + ' from |undefined|',

  '[]: ["start",' + expectObjJson + ',' + expectArrJson + '] from |undefined|'
], 'overwrite result');
assert.sameValue(
  JSON.stringify(overwriteResult),
  '["start",' + expectObjJson + ',' + expectArrJson + ']',
  'overwrite result'
);

log = [];
var cache = {};
function replacingReviver(key, value, context) {
  log.push('[' + key + ']: ' + JSON.stringify(value) + ' from |' + context.source + '|');
  if (value === 'start') {
    // Remove properties from the upcoming object, caching and truncating its array.
    cache.objNonPrim = this[2].nonPrim;
    this[2].nonPrim.length = 0;
    delete this[2].prim;
    delete this[2].nonPrim;

    // Remove elements from the upcoming array, caching and truncating its array.
    cache.arrNonPrim = this[3][2];
    this[3][2].length = 0;
    this[3].length = 1;

    assert.sameValue(JSON.stringify(this), '["start","continue",{"0":"obj"},["arr"]]',
      'reviver forward removal');
  } else if (value === 'continue') {
    // Restore properties of the upcoming object, but in reverse order.
    // Then freeze the object to mutate attributes of those properties.
    this[2].nonPrim = cache.objNonPrim;
    this[2].prim = 1;
    Object.freeze(this[2]);

    // Restore elements of the upcoming array, then freeze it.
    this[3].push(1, cache.arrNonPrim);
    Object.freeze(this[3]);

    assert.sameValue(
      JSON.stringify(this),
      '["start","continue",{"0":"obj","nonPrim":[],"prim":1},["arr",1,[]]]',
      'reviver forward restoration');
  } else if (value === 'obj') {
    // Restore the element of the upcoming array and freeze it.
    this.nonPrim.push('string');
    Object.freeze(this.nonPrim);
  } else if (value === 'arr') {
    // Restore the element of the upcoming array and freeze it.
    this[2].push('string');
    Object.freeze(this[2]);
  }
  return value;
}
var replacedResult = JSON.parse(
  '[ ' +
    '"start", ' +
    '"continue", ' +
    '{ "0": "obj", "prim": 1e0, "nonPrim": ["string"] }, ' +
    '["arr", 1e0, ["string"]] ' +
  ']',
  replacingReviver
);
expectObjJson = '{"0":"obj","nonPrim":["string"],"prim":1}';
expectArrJson = '["arr",1,["string"]]';
assert.compareArray(log, [
  '[0]: "start" from |"start"|',
  '[1]: "continue" from |"continue"|',

  '[0]: "obj" from |"obj"|',
  '[0]: "string" from |"string"|',
  '[nonPrim]: ["string"] from |undefined|',
  '[prim]: 1 from |1e0|',
  '[2]: ' + expectObjJson + ' from |undefined|',

  '[0]: "arr" from |"arr"|',
  '[1]: 1 from |1e0|',
  '[0]: "string" from |"string"|',
  '[2]: ["string"] from |undefined|',
  '[3]: ' + expectArrJson + ' from |undefined|',

  '[]: ["start","continue",' + expectObjJson + ',' + expectArrJson + '] from |undefined|'
], 'replaced result');
assert.sameValue(
  JSON.stringify(replacedResult),
  '["start","continue",' + expectObjJson + ',' + expectArrJson + ']',
  'replaced result'
);

log = [];
function splicingReviver(key, value, context) {
  log.push('[' + key + ']: ' + JSON.stringify(value) + ' from |' + context.source + '|');
  if (value === 'start') {
    // Remove the "x" at index 1, throwing off the index for values 1+.
    this.splice(1, 1);
  } else if (value === 1) {
    // Insert a following element, restoring the index for values 2+.
    this.splice(+key + 1, 0, 1.5);
  } else if (value === 2) {
    // Insert a following element, throwing off the index for values 3+.
    this.splice(+key + 1, 0, 'pre 3');
  } else if (value === 'pre 3') {
    // Remove the following element (the original 3e0), restoring the index for values 4+.
    this.splice(+key, 1);
  } else if (value === 4) {
    // Add a new final element.
    this.push("end");
  }
  return value;
}
var replacedResult = JSON.parse('["start", "x", 1e0, 2e0, 3e0, 4e0]', splicingReviver);
assert.compareArray(log, [
  '[0]: "start" from |"start"|',
  '[1]: 1 from |undefined|',
  '[2]: 1.5 from |undefined|',
  '[3]: 2 from |2e0|',
  '[4]: "pre 3" from |undefined|',
  '[5]: 4 from |4e0|',
  '[]: ["start",1,1.5,2,"pre 3",4,"end"] from |undefined|'
], 'spliced result');
assert.sameValue(
  JSON.stringify(replacedResult),
  '["start",1,1.5,2,"pre 3",4,"end"]',
  'spliced result'
);
