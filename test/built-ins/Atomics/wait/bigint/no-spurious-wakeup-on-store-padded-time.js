// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait actually waits and does not spuriously wake
  up when the memory value is changed.
includes: [atomicsHelper.js]
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
$262.agent.receiveBroadcast(function(sab, id) {
  var ia = new BigInt64Array(sab);
  var then = Date.now();
  Atomics.wait(ia, 0, 0);
  var diff = Date.now() - then;        // Should be about 1000 ms but can be more
  $262.agent.report(diff);
  $262.agent.leaving();
})
`);

var ia = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(ia.buffer);
$262.agent.sleep(500); // Give the agent a chance to wait
Atomics.store(ia, 0, 1); // Change the value, should not wake the agent
$262.agent.sleep(500); // Wait some more so that we can tell
Atomics.wake(ia, 0); // Really wake it up
assert.sameValue((getReport() | 0) >= 1000 - $ATOMICS_MAX_TIME_EPSILON, true);

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}
