// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test that Atomics.wake wakes zero waiters if that's what the count is.
includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

const WAKECOUNT = 0;
const WAIT_INDEX = 0;             // Agents wait here
const RUNNING = 1;                // Accounting of live agents here
const NUMAGENT = 3;
const BUFFER_SIZE = 4;

for (var i = 0; i < NUMAGENT; i++) {
  $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${RUNNING}, 1);
      // Waiters that are not woken will time out eventually.
      $262.agent.report(Atomics.wait(i32a, ${WAIT_INDEX}, 0, 200));
      $262.agent.leaving();
    });
  `);
}

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE)
);

$262.agent.broadcast(i32a.buffer);

// Wait for agents to be running.
$262.agent.waitUntil(i32a, RUNNING, NUMAGENT);

// There's a slight risk we'll fail to wake the desired count, if the preceding
// sleep() took much longer than anticipated and workers have started timing
// out.
assert.sameValue(
  Atomics.wake(i32a, WAIT_INDEX, WAKECOUNT),
  WAKECOUNT,
  'Atomics.wake(i32a, WAIT_INDEX, WAKECOUNT) equals the value of `WAKECOUNT` (0)'
);

// Sleep past the timeout
$262.agent.sleep(300);

for (var i = 0; i < NUMAGENT; i++) {
  assert.sameValue($262.agent.getReport(), 'timed-out', `Report #${i}: must equal "timed-out"`);
}
