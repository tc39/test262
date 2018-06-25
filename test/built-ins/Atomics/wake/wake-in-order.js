// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test that Atomics.wake wakes agents in the order they are waiting.
includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

const NUMAGENT = 3;
const WAKEUP = 0;                 // Waiters on this will be woken
const SPIN = 1;                   // Worker i (zero-based) spins on location SPIN+i
const RUNNING = SPIN + NUMAGENT;  // Accounting of live agents
const NUMELEM = RUNNING + 1;

// Create workers and start them all spinning.  We set atomic slots to make
// them go into a wait, thus controlling the waiting order.  Then we wake them
// one by one and observe the wakeup order.

for (var attempt = 0; attempt < 10; attempt++) {
  for (var i = 0; i < NUMAGENT; i++) {
    $262.agent.start(`
      $262.agent.receiveBroadcast(function(sab) {
        const i32a = new Int32Array(sab);
        Atomics.add(i32a, ${RUNNING}, 1);
        while (Atomics.load(i32a, ${SPIN + i}) === 0) {
          /* nothing */
        }
        $262.agent.report(${i});
        Atomics.wait(i32a, ${WAKEUP}, 0);
        $262.agent.report(${i});
        $262.agent.leaving();
      });
    `);
  }

  const i32a = new Int32Array(
    new SharedArrayBuffer(NUMELEM * Int32Array.BYTES_PER_ELEMENT)
  );

  $262.agent.broadcast(i32a.buffer);

  // Wait for agents to be running.
  waitUntil(i32a, RUNNING, NUMAGENT);

  // Sleep to allow the agents a fair chance to wait. If we don't,
  // we risk sending the wakeup before agents are sleeping, and we hang.
  $262.agent.sleep(50);

  var waiterlist = [];
  assert.sameValue(Atomics.store(i32a, SPIN + 0, 1), 1);
  waiterlist.push(getReport());

  assert.sameValue(Atomics.store(i32a, SPIN + 1, 1), 1);
  waiterlist.push(getReport());

  assert.sameValue(Atomics.store(i32a, SPIN + 2, 1), 1);
  waiterlist.push(getReport());

  var notified = [];
  assert.sameValue(Atomics.wake(i32a, WAKEUP, 1), 1);
  notified.push(getReport());

  assert.sameValue(Atomics.wake(i32a, WAKEUP, 1), 1);
  notified.push(getReport());

  assert.sameValue(Atomics.wake(i32a, WAKEUP, 1), 1);
  notified.push(getReport());

  assert.sameValue(
    notified.join(''),
    waiterlist.join(''),
    `Attempt #${attempt}: notified and waiterlist order do not match.`
  );
}
