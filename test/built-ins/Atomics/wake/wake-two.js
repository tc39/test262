// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test that Atomics.wake wakes two waiters if that's what the count is.
includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/


const WAIT_INDEX = 0;             // Agents wait here
const RUNNING = 1;                // Accounting of live agents here
const WAKECOUNT = 2;
const NUMAGENT = 3;
const BUFFER_SIZE = 4;

for (var i = 0; i < NUMAGENT; i++ ) {
  $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${RUNNING}, 1);
      // Waiters that are not woken will time out eventually.
      $262.agent.report(Atomics.wait(i32a, ${WAIT_INDEX}, 0, 200));
      $262.agent.leaving();
    })
  `);
}

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE)
);

$262.agent.broadcast(i32a.buffer);

// Wait for agents to be running.
waitUntil(i32a, RUNNING, NUMAGENT);

// Then wait some more to give the agents a fair chance to wait.  If we don't,
// we risk sending the wakeup before agents are sleeping, and we hang.
$262.agent.sleep(10);

// There's a slight risk we'll fail to wake the desired count, if the preceding
// sleep() took much longer than anticipated and workers have started timing
// out.
assert.sameValue(
  Atomics.wake(i32a, 0, WAKECOUNT),
  WAKECOUNT,
  'Atomics.wake(i32a, 0, WAKECOUNT) equals the value of `WAKECOUNT` (2)'
);

// Sleep past the timeout
$262.agent.sleep(300);

// Collect and check results
var rs = [];
for (var i = 0; i < NUMAGENT; i++) {
  rs.push(getReport());
}
rs.sort();

for (var i = 0; i < WAKECOUNT; i++) {
  assert.sameValue(rs[i], 'ok', 'The value of rs[i] is "ok"');
}
for (var i = WAKECOUNT; i < NUMAGENT; i++) {
  assert.sameValue(rs[i], 'timed-out', 'The value of rs[i] is "timed-out"');
}

