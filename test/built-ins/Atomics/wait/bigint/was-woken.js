// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait returns the right result when it was awoken.
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
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
  var i64a = new BigInt64Array(sab);
  $262.agent.report(Atomics.wait(i64a, 0, 0)); // No timeout => Infinity
  $262.agent.leaving();
});
`);

var i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(50); // Give the agent a chance to wait
Atomics.wake(i64a, 0);
assert.sameValue(getReport(), "ok");
