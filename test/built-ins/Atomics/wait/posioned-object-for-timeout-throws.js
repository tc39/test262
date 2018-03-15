// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  False timeout arg should result in a timeout value of 1
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4.Let q be ? ToNumber(timeout).
    ...
    Object
      Apply the following steps:
      Let primValue be ? ToPrimitive(argument, hint Number).
        ...
          g. Return ? OrdinaryToPrimitive(input, hint).
            ...
            6.Throw a TypeError exception.
features: [ Atomics ]
---*/

var sab = new SharedArrayBuffer(1024);
var int32Array = new Int32Array(sab);

var poisoned = {
  valueOf: false,
  toString: false
};

assert.throws(TypeError, function () {  Atomics.wait(int32Array, 0, 0, poisoned) });

assert.sameValue(Atomics.wake(int32Array, 0), 0);
