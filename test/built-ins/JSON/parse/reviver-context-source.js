// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.parse
description: >
  Context argument and its source property behave as expected
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
  ...
  6. Return ? Call(_reviver_, _holder_, « _name_, _val_, _context_ »).

includes: [compareArray.js, propertyHelper.js]
features: [json-parse-with-source]
---*/

function assertOnlyOwnProperties(object, expectNames, message) {
  assert.compareArray(Object.getOwnPropertyNames(object), expectNames, message);
  assert.compareArray(Object.getOwnPropertySymbols(object), [], message);
}

function reviverWithExpectedSources(label, expectedSources) {
  var i = -1;
  return function reviver(key, value, context) {
    i++;
    var prefix = label + " invocation index " + i + " context ";
    assert.sameValue(typeof context, "object", prefix + "should be an object");
    assert.sameValue(Object.getPrototypeOf(context), Object.prototype,
      prefix + "should be a plain object");
    var expectedSource = expectedSources[i];
    if (expectedSource === undefined) {
      assertOnlyOwnProperties(context, [], prefix + "should have no properties");
      return value;
    }
    assertOnlyOwnProperties(context, ["source"], prefix + "should have a source property");
    assert.sameValue(context.source, expectedSource, prefix + "source");
    verifyProperty(context, "source", {
      value: expectedSource,
      configurable: true,
      enumerable: true,
      writable: true,
    });
    return value;
  };
}

function verifyParsedPrimitive(jsonText, expectedResult) {
  var reviver = reviverWithExpectedSources(jsonText, [jsonText]);
  var parseResult = JSON.parse(' ' + jsonText + '\t', reviver);
  assert.sameValue(parseResult, expectedResult, jsonText);
}

verifyParsedPrimitive('null', null);
verifyParsedPrimitive('false', false);
verifyParsedPrimitive('true', true);

verifyParsedPrimitive('""', '');
verifyParsedPrimitive('"foo"', 'foo');
verifyParsedPrimitive('"\\u00bD"', '\u00bd');

verifyParsedPrimitive('1', 1);
verifyParsedPrimitive('-1', -1);
verifyParsedPrimitive('-1.2', -1.2);
verifyParsedPrimitive('-0', -0);
verifyParsedPrimitive('1e0', 1);
verifyParsedPrimitive('1E1', 10);
verifyParsedPrimitive('1.23e+1', 12.3);
verifyParsedPrimitive('1.23E-1', 0.123);

function verifyParsedArray(jsonText, expectedSources, expectedResult) {
  var reviver = reviverWithExpectedSources(jsonText, expectedSources);
  var parseResult = JSON.parse(jsonText, reviver);
  assert(parseResult instanceof Array, jsonText);
  for (var i = 0; i < parseResult.length; i++) {
    var element = parseResult[i];
    // compareArray only works with primitives, so stringify objects.
    if (element && typeof element === 'object') {
      parseResult[i] = JSON.stringify(element);
    }
  }
  assert.compareArray(parseResult, expectedResult, jsonText);
}

verifyParsedArray('[ ]', [], []);
verifyParsedArray('[ -1.00, -0.00, -0 ]', ['-1.00', '-0.00', '-0'], [-1, -0, -0]);
verifyParsedArray(
  '[1e3, "2e2", "\\u00bD", null, false, true, {"x": 3e+2, "y": 0.40}, []]',
  ['1e3', '"2e2"', '"\\u00bD"', 'null', 'false', 'true', '3e+2', '0.40'],
  [1000, '2e2', '\u00bd', null, false, true, '{"x":300,"y":0.4}', '[]']
);

function verifyParsedObject(jsonText, expectedSources, expectedKeys) {
  var reviver = reviverWithExpectedSources(jsonText, expectedSources);
  var parseResult = JSON.parse(jsonText, reviver);
  assertOnlyOwnProperties(parseResult, expectedKeys, jsonText);
  return parseResult;
}

verifyParsedObject('{}', [], []);
var singleProp = verifyParsedObject('{ "42": 42E-1 }', ["42E-1"], ["42"]);
assert.sameValue(singleProp['42'], 4.2, 'singleProp[onlyKey]');
var deep = verifyParsedObject(
  '{ "x": [1.0, 2.0], "y": [{ "value": 3.0 }, 4.0] }',
  ['1.0', '2.0', /* [1.0, 2.0] */ undefined, '3.0', /* { value: 3.0 } */ undefined, '4.0'],
  ['x', 'y']
);
assert.compareArray(deep.x, [1, 2], 'deep.x');
assert.sameValue(deep.y.length, 2, 'deep.y');
assertOnlyOwnProperties(deep.y[0], ['value'], 'deep.y[0]');
assert.sameValue(deep.y[1], 4, 'deep.y[1]');
assert.sameValue(JSON.stringify(deep), '{"x":[1,2],"y":[{"value":3},4]}', 'deep');
