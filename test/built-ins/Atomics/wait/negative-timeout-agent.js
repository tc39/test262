// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait times out with a negative timeout
includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab, id) {
    var i32a = new Int32Array(sab);
    $262.agent.report(Atomics.wait(i32a, 0, 0, -5)); // -5 => 0
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(100);

assert.sameValue($262.agent.getReport(), 'timed-out');
assert.sameValue(Atomics.wake(i32a, 0), 0);
