// Copyright (C) 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Allowed boundary cases of the third 'count' argument to Atomics.wake
features: [Atomics, SharedArrayBuffer, TypedArray]
includes: [nans.js]
---*/

var sab = new SharedArrayBuffer(4);
var view = new Int32Array(sab);

NaNs.forEach(nan => {
  assert.sameValue(Atomics.wake(view, 0, nan), 0);
});
