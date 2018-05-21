// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Get the correct WaiterList
info: |
  Atomics.wait( typedArray, index, value, timeout )

  ...
  11. Let WL be GetWaiterList(block, indexedPosition).
  ...


  GetWaiterList( block, i )

  ...
  4. Return the WaiterList that is referenced by the pair (block, i).

includes: [atomicsHelper.js]
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);

    // Wait on index 0
    Atomics.wait(i64a, 0, 0, 200);
    $262.agent.report(0);
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);

    // Wait on index 2
    Atomics.wait(i64a, 2, 0, 200);
    $262.agent.report(2);
    $262.agent.leaving();
  });
`);

const i64a = new BigInt64Array(
  new SharedArrayBuffer(4 * BigInt64Array.BYTES_PER_ELEMENT)
);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(10);

// Wake index 2
Atomics.wake(i64a, 2, 1);
assert.sameValue(getReport(), '2');

// Wake index 0
Atomics.wake(i64a, 0, 1);
assert.sameValue(getReport(), '0');

