// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  New waiters should be applied to the end of the list and woken by order they entered the list (FIFO)
info: |
  Atomics.wait( typedArray, index, value, timeout )

  16.Perform AddWaiter(WL, W).
    ...
    3.Add W to the end of the list of waiters in WL.

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var agent1 = '1';
var agent2 = '2';
var agent3 = '3';

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(${agent1});
    $262.agent.report(Atomics.wait(i32a, 1, 0));
    $262.agent.report(${agent1});
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(${agent2});
    $262.agent.report(Atomics.wait(i32a, 2, 0));
    $262.agent.report(${agent2});
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(${agent3});
    $262.agent.report(Atomics.wait(i32a, 3, 0));
    $262.agent.report(${agent3});
    $262.agent.leaving();
  });
`);


const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(500);

// Agents may be started in any order...
const started = [getReport(), getReport(), getReport()];

// Agents must wake in the order they waited
assert.sameValue(Atomics.wake(i32a, 1, 1), 1);
assert.sameValue(getReport(), 'ok');
assert.sameValue(getReport(), started[0]);

assert.sameValue(Atomics.wake(i32a, 2, 1), 1);
assert.sameValue(getReport(), 'ok');
assert.sameValue(getReport(), started[1]);

assert.sameValue(Atomics.wake(i32a, 3, 1), 1);
assert.sameValue(getReport(), 'ok');
assert.sameValue(getReport(), started[2]);
