// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlastindex
description: >
  Return abrupt from ToLength(Get(O, "length")) where length is a Symbol.
info: |
  Array.prototype.findLastIndex ( predicate[ , thisArg ] )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [Symbol]
---*/

var o = {};

o.length = Symbol(1);

// predicate fn is given to avoid false positives
assert.throws(TypeError, function() {
  [].findLastIndex.call(o, function() {});
});
