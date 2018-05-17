// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait returns the right result when it was awoken.
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

$262.agent.start(`
$262.agent.receiveBroadcast(function(sab, id) {
  var i32a = new Int32Array(sab);
  $262.agent.report(Atomics.wait(i32a, 0, 0)); // No timeout => Infinity
  $262.agent.leaving();
});
`);

var i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(500); // Give the agent a chance to wait
Atomics.wake(i32a, 0);
assert.sameValue(getReport(), "ok");
