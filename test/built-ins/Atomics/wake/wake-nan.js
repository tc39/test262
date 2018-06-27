// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test that Atomics.wake wakes zero waiters if the count is NaN
includes: [atomicsHelper.js,testAtomics.js]
features: [ArrayBuffer, DataView, let, arrow-function, for-of, Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    $262.agent.report(Atomics.wait(i32a, 0, 0, 200)); // We will timeout eventually
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(10); // Give the agent a chance to wait
assert.sameValue(Atomics.wake(i32a, 0, NaN), 0, 'Atomics.wake(i32a, 0, NaN) returns 0');

// Sleep past the timeout
$262.agent.sleep(300);
assert.sameValue($262.agent.getReport(), 'timed-out', '$262.agent.getReport() returns "timed-out"');
