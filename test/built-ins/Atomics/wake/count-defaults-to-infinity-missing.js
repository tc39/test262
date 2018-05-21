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

var NUMAGENT = 4; // Total number of agents started
var WAKEUP = 0; // Index all agents are waiting on

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    $262.agent.report("A " + Atomics.wait(i32a, ${WAKEUP}, 0, 50));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    $262.agent.report("B " + Atomics.wait(i32a, ${WAKEUP}, 0, 50));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    $262.agent.report("C " + Atomics.wait(i32a, ${WAKEUP}, 0, 50));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    $262.agent.report("D " + Atomics.wait(i32a, ${WAKEUP}, 0, 50));
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(20);

assert.sameValue(
  Atomics.wake(i32a, WAKEUP /*, count missing */),
  NUMAGENT,
  'Atomics.wake(i32a, WAKEUP /*, count missing */) equals the value of `NUMAGENT` (4)'
);

var sortedReports = [];
for (var i = 0; i < NUMAGENT; i++) {
  sortedReports.push(getReport());
}
sortedReports.sort();

assert.sameValue(sortedReports[0], "A ok", 'The value of sortedReports[0] is "A ok"');
assert.sameValue(sortedReports[1], "B ok", 'The value of sortedReports[1] is "B ok"');
assert.sameValue(sortedReports[2], "C ok", 'The value of sortedReports[2] is "C ok"');
assert.sameValue(sortedReports[3], "D ok", 'The value of sortedReports[3] is "D ok"');
