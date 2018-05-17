// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait actually waits and does not spuriously wake
  up when the memory value is changed.
includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
$262.agent.receiveBroadcast(function(sab, id) {
  var i32a = new Int32Array(sab);
  var then = $262.agent.monotonicNow();
  Atomics.wait(i32a, 0, 0);
  var diff = $262.agent.monotonicNow() - then;        // Should be about 1000 ms but can be more
  $262.agent.report(diff);
  $262.agent.leaving();
})
`);

var i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(500); // Give the agent a chance to wait
Atomics.store(i32a, 0, 1); // Change the value, should not wake the agent
$262.agent.sleep(500); // Wait some more so that we can tell
Atomics.wake(i32a, 0); // Really wake it up
assert.sameValue((getReport() | 0) >= 1000 - $ATOMICS_MAX_TIME_EPSILON, true);

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}
