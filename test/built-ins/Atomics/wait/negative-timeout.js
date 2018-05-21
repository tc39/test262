// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait times out with a negative timeout
features: [Atomics, SharedArrayBuffer, TypedArray]
flags: [CanBlockIsFalse]
---*/

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

assert.sameValue(Atomics.wait(i32a, 0, 0, -1), "timed-out");
