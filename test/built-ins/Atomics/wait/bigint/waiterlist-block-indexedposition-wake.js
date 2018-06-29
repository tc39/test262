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
    $262.agent.report(Atomics.wait(i64a, 0, 0n, Infinity));
    $262.agent.leaving();
  });
`);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);

    // Wait on index 7
    $262.agent.report(Atomics.wait(i64a, 7, 0n, Infinity));
    $262.agent.leaving();
  });
`);

const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8)
);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(10);

// Wake index 1, wakes nothing
assert.sameValue(Atomics.wake(i64a, 1), 0, 'Atomics.wake(i64a, 1) returns 0');
// Wake index 3, wakes nothing
assert.sameValue(Atomics.wake(i64a, 3), 0, 'Atomics.wake(i64a, 3) returns 0');
// Wake index 4, wakes nothing
assert.sameValue(Atomics.wake(i64a, 4), 0, 'Atomics.wake(i64a, 4) returns 0');
// Wake index 5, wakes nothing
assert.sameValue(Atomics.wake(i64a, 5), 0, 'Atomics.wake(i64a, 5) returns 0');

// Wake index 7, wakes 1
assert.sameValue(Atomics.wake(i64a, 7), 1, 'Atomics.wake(i64a, 7) returns 1');
assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');

// Wake index 0, wakes 1
assert.sameValue(Atomics.wake(i64a, 0), 1, 'Atomics.wake(i64a, 0) returns 1');
assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
