// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.wait
description: >
  Throws a TypeError if the typedArray arg is not a TypedArray object
info: |
  Atomics.wait( typedArray, index, value, timeout )

  1.Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
    ...
      3.If typedArray does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.

features: [ Atomics ]
---*/

var poisoned = {
  valueOf: function() {
    throw new Test262Error("should not evaluate this code");
  }
};

assert.throws(TypeError, () => Atomics.wait({}, 0, 0, 0));
assert.throws(TypeError, () => Atomics.wait({}, poisoned, poisoned, poisoned));
