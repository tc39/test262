// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlastindex
description: >
  Return abrupt from ToObject(this value).
info: |
  Array.prototype.findLastIndex ( predicate[ , thisArg ] )

  1. Let O be ? ToObject(this value).
---*/

// predicate fn is given to avoid false positives
assert.throws(TypeError, function() {
  Array.prototype.findLastIndex.call(undefined, function() {});
});

assert.throws(TypeError, function() {
  Array.prototype.findLastIndex.call(null, function() {});
});
