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

features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

const agent1 = '1';
const agent2 = '2';
const agent3 = '3';

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(${agent1});
    Atomics.wait(i32a, 0, 0);
    $262.agent.report(${agent1});
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(${agent2});
    Atomics.wait(i32a, 0, 0);
    $262.agent.report(${agent2});
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(${agent3});
    Atomics.wait(i32a, 0, 0);
    $262.agent.report(${agent3});
    $262.agent.leaving();
  });
`);


var i32a = new Int32Array(new SharedArrayBuffer(4));

$262.agent.broadcast(i32a.buffer);

var orderAgentsStarted = getReport() + getReport() + getReport(); // can be started in any order

assert.sameValue(Atomics.wake(i32a, 0, 1), 1);

var orderAgentsWereWoken = getReport();

assert.sameValue(Atomics.wake(i32a, 0, 1), 1);

orderAgentsWereWoken += getReport();

assert.sameValue(Atomics.wake(i32a, 0, 1), 1);

orderAgentsWereWoken += getReport();

assert.sameValue(orderAgentsStarted, orderAgentsWereWoken);  // agents should wake in the same order as they were started FIFO
