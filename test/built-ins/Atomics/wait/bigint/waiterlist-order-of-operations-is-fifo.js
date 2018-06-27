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
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/
const agent1 = '1';
const agent2 = '2';
const agent3 = '3';

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);

    $262.agent.report(${agent1});
    $262.agent.report(Atomics.wait(i64a, 1, 0n));
    $262.agent.report(${agent1});
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);

    $262.agent.report(${agent2});
    $262.agent.report(Atomics.wait(i64a, 2, 0n));
    $262.agent.report(${agent2});
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);

    $262.agent.report(${agent3});
    $262.agent.report(Atomics.wait(i64a, 3, 0n));
    $262.agent.report(${agent3});
    $262.agent.leaving();
  });
`);


const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8)
);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(100);

// Agents may be started in any order...
const started = [$262.agent.getReport(), $262.agent.getReport(), $262.agent.getReport()];

// Agents must wake in the order they waited
assert.sameValue(Atomics.wake(i64a, 1, 1), 1, 'Atomics.wake(i64a, 1, 1) returns 1');
assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
assert.sameValue(
  $262.agent.getReport(),
  started[0],
  `$262.agent.getReport() returns the value of 'started[0]' (${started[0]})`
);

assert.sameValue(Atomics.wake(i64a, 2, 1), 1, 'Atomics.wake(i64a, 2, 1) returns 1');
assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
assert.sameValue(
  $262.agent.getReport(),
  started[1],
  `$262.agent.getReport() returns the value of 'started[1]' (${started[1]})`
);

assert.sameValue(Atomics.wake(i64a, 3, 1), 1, 'Atomics.wake(i64a, 3, 1) returns 1');
assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
assert.sameValue(
  $262.agent.getReport(),
  started[2],
  `$262.agent.getReport() returns the value of 'started[2]' (${started[2]})`
);
