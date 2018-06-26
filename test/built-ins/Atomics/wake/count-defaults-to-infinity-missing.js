// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Default to +Infinity when missing 'count' argument to Atomics.wake
info: |
  Atomics.wake( typedArray, index, count )

  ...
  3. If count is undefined, let c be +∞.
  ...

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

const RUNNING = 0
const WAIT_INDEX = 1; // Index all agents are waiting on
const NUMAGENT = 4; // Total number of agents started
const BUFFER_SIZE = 5; // Index all agents are waiting on

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
    $262.agent.report("A " + Atomics.wait(i32a, ${WAIT_INDEX}, 0, 50));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
    $262.agent.report("B " + Atomics.wait(i32a, ${WAIT_INDEX}, 0, 50));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
    $262.agent.report("C " + Atomics.wait(i32a, ${WAIT_INDEX}, 0, 50));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
    $262.agent.report("D " + Atomics.wait(i32a, ${WAIT_INDEX}, 0, 50));
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE)
);

$262.agent.broadcast(i32a.buffer);

// Wait for agents to be running.
waitUntil(i32a, RUNNING, NUMAGENT);

assert.sameValue(
  Atomics.wake(i32a, WAIT_INDEX /*, count missing */),
  NUMAGENT,
  'Atomics.wake(i32a, WAIT_INDEX /*, count missing */) equals the value of `NUMAGENT` (4)'
);

const sortedReports = [];
for (var i = 0; i < NUMAGENT; i++) {
  sortedReports.push(getReport());
}
sortedReports.sort();

assert.sameValue(sortedReports[0], 'A ok', 'The value of sortedReports[0] is "A ok"');
assert.sameValue(sortedReports[1], 'B ok', 'The value of sortedReports[1] is "B ok"');
assert.sameValue(sortedReports[2], 'C ok', 'The value of sortedReports[2] is "C ok"');
assert.sameValue(sortedReports[3], 'D ok', 'The value of sortedReports[3] is "D ok"');
