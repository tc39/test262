// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test that Atomics.wake wakes zero waiters if the count is NaN
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
$262.agent.receiveBroadcast(function(sab) {
  var i32a = new Int32Array(sab);
  $262.agent.report(Atomics.wait(i32a, 0, 0, 1000)); // We will timeout eventually
  $262.agent.leaving();
})
`);

var i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(500); // Give the agent a chance to wait
assert.sameValue(Atomics.wake(i32a, 0, NaN), 0); // Don't actually wake it
assert.sameValue(getReport(), "timed-out");

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}
