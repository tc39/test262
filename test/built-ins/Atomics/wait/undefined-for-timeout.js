// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Undefined timeout arg should result in an infinite timeout
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4.Let q be ? ToNumber(timeout).
    ...
    Undefined    Return NaN.
  5.If q is NaN, let t be +∞, else let t be max(q, 0)

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

const NUMAGENT = 2; // Total number of agents started
const WAKEUP = 0; // Index all agents are waiting on
const WAKECOUNT = 2; // Total number of agents to wake up

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    var i32a = new Int32Array(sab);
    $262.agent.report("A " + Atomics.wait(i32a, 0, 0, undefined));  // undefined => NaN => +Infinity
    $262.agent.leaving();
  });
`);

$262.agent.start(
  `
  $262.agent.receiveBroadcast(function(sab) {
    var i32a = new Int32Array(sab);
    $262.agent.report("B " + Atomics.wait(i32a, 0, 0));  // undefined timeout arg => NaN => +Infinity
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(500); // Ample time

// No Reports made before wait
assert.sameValue(getReport(), null);

assert.sameValue(Atomics.wake(i32a, WAKEUP, WAKECOUNT), WAKECOUNT);

const sortedReports = [];
for (var i = 0; i < NUMAGENT; i++) {
  sortedReports.push(getReport());
}
sortedReports.sort();

assert.sameValue(sortedReports[0], 'A ok');
assert.sameValue(sortedReports[1], 'B ok');
