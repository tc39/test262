// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait times out with a negative timeout
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
  var ia = new BigInt64Array(sab);
  $262.agent.report(Atomics.wait(ia, 0, 0, -5)); // -5 => 0
  $262.agent.leaving();
});
`);

var buffer = new SharedArrayBuffer(1024);
var i64a = new BigInt64Array(buffer);

$262.agent.broadcast(i64a.buffer);
assert.sameValue(getReport(), "timed-out");
assert.sameValue(Atomics.wake(i64a, 0), 0);
