// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.waitasync
description: >
  Test that Atomics.waitAsync times out with a negative timeout
flags: [async]
features: [Atomics.waitAsync, SharedArrayBuffer, TypedArray, Atomics]
---*/
const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

Promise.all([
    Atomics.waitAsync(i32a, 0, 0, -1).value,
  ]).then(outcomes => {
    assert.sameValue(
      outcomes[0],
      'timed-out',
      'Atomics.waitAsync(i32a, 0, 0, -1).value resolves to "timed-out"'
    );
  }, $DONE).then($DONE, $DONE);
