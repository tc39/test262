// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.waitasync
description: >
  Atomics.waitAsync returns a promise.
info: |
  Atomics.waitAsync( typedArray, index, value, timeout )

  1. Return DoWait(async, typedArray, index, value, timeout).

  DoWait ( mode, typedArray, index, value, timeout )

  ...
  13. Let promiseCapability be undefined.
  14. If mode is async, then
    a. Set promiseCapability to ! NewPromiseCapability(%Promise%).

  ...
  24. Return promiseCapability.[[Promise]].

features: [Atomics.waitAsync]
---*/

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 8)
);

let p = Atomics.waitAsync(i32a, 0, 0, 0);

assert(p instanceof Promise);
assert.sameValue(Object.getPrototypeOf(p), Promise.prototype);
