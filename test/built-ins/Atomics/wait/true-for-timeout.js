// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Throws a TypeError if index arg can not be converted to an Integer
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4. Let q be ? ToNumber(timeout).

    Boolean -> If argument is true, return 1. If argument is false, return +0.

features: [Atomics, SharedArrayBuffer, Symbol, Symbol.toPrimitive, TypedArray]
flags: [CanBlockIsFalse]
---*/

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

const valueOf = {
  valueOf: function() {
    return true;
  }
};

const toPrimitive = {
  [Symbol.toPrimitive]: function() {
    return true;
  }
};

assert.sameValue(Atomics.wait(i32a, 0, 0, true), 'timed-out');
assert.sameValue(Atomics.wait(i32a, 0, 0, valueOf), 'timed-out');
assert.sameValue(Atomics.wait(i32a, 0, 0, toPrimitive), 'timed-out');

