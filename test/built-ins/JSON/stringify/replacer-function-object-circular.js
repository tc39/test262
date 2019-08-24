// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-serializejsonobject
description: >
  Circular object value (returned from replacer function) throws a TypeError.
info: |
  JSON.stringify ( value [ , replacer [ , space ] ] )

  [...]
  12. Return ? SerializeJSONProperty(the empty String, wrapper).

  SerializeJSONProperty ( key, holder )

  [...]
  3. If ReplacerFunction is not undefined, then
    a. Set value to ? Call(ReplacerFunction, holder, « key, value »).
  [...]
  10. If Type(value) is Object and IsCallable(value) is false, then
    [...]
    c. Return ? SerializeJSONObject(value).

  SerializeJSONObject ( value )

  1. If stack contains value, throw a TypeError exception because the structure is cyclical.
---*/

var direct = {};
var directReplacer = function(_key, value) {
  if (value === direct) {
    return {prop: direct};
  }

  return value;
};

assert.throws(TypeError, function() {
  JSON.stringify(direct, directReplacer);
});

var indirect = {p1: {p2: {}}};
var indirectReplacer = function(_key, value) {
  if (value === indirect.p1.p2) {
    return {p3: indirect};
  }

  return value;
};

assert.throws(TypeError, function() {
  JSON.stringify(indirect, indirectReplacer);
});
