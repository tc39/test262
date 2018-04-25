// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait times out with a negative timeout
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
  var ia = new Int32Array(sab);
  $262.agent.report(Atomics.wait(ia, 0, 0, -5)); // -5 => 0
  $262.agent.leaving();
})
`);

var buffer = new SharedArrayBuffer(1024);
var i32a = new Int32Array(buffer);

$262.agent.broadcast(i32a.buffer);
assert.sameValue(getReport(), "timed-out");
assert.sameValue(Atomics.wake(i32a, 0), 0);
