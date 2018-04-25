// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait times out with a negative timeout
features: [Atomics, SharedArrayBuffer, TypedArray]
flags: [CanBlockIsFalse]
---*/

var buffer = new SharedArrayBuffer(1024);
var i32a = new Int32Array(buffer);

assert.sameValue(Atomics.wait(i32a, 0, 0, -1), "timed-out");
