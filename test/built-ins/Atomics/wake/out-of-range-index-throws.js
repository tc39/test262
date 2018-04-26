// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Throws a RangeError if value of index arg is out of range
  info: |
  Atomics.wake( typedArray, index, count )

  2.Let i be ? ValidateAtomicAccess(typedArray, index).
    ...
    2.Let accessIndex be ? ToIndex(requestIndex).
    ...
    5. If accessIndex ≥ length, throw a RangeError exception.
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var i32a = new Int32Array(new SharedArrayBuffer(4));
var poisoned = {
  valueOf: function() {
    throw new Test262Error("should not evaluate this code");
  }
};

assert.throws(RangeError, function() {
  Atomics.wake(i32a, Infinity, poisoned);
});
assert.throws(RangeError, function() {
  Atomics.wake(i32a, 2, poisoned);
});
assert.throws(RangeError, function() {
  Atomics.wake(i32a, 200, poisoned);
});
