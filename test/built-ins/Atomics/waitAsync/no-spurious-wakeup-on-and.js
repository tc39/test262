// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.waitasync
description: >
  Waiter does not spuriously notify on index which is subject to And operation
info: |
  AddWaiter ( WL, waiterRecord )

  5. Append waiterRecord as the last element of WL.[[Waiters]]
  6. If waiterRecord.[[Timeout]] is finite, then in parallel,
    a. Wait waiterRecord.[[Timeout]] milliseconds.
    b. Perform TriggerTimeout(WL, waiterRecord).

  TriggerTimeout( WL, waiterRecord )

  3. If waiterRecord is in WL.[[Waiters]], then
    a. Set waiterRecord.[[Result]] to "timed-out".
    b. Perform RemoveWaiter(WL, waiterRecord).
    c. Perform NotifyWaiter(WL, waiterRecord).
  4. Perform LeaveCriticalSection(WL).

includes: [atomicsHelper.js]
features: [Atomics.waitAsync, SharedArrayBuffer, TypedArray, Atomics]
---*/

const RUNNING = 1;
const TIMEOUT = $262.agent.timeouts.small;

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(async function(sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);

    const before = $262.agent.monotonicNow();
    const unpark = await Atomics.waitAsync(i32a, 0, 0, ${TIMEOUT}).value;
    const duration = $262.agent.monotonicNow() - before;
    $262.agent.report(duration);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, 1);
$262.agent.tryYield();

Atomics.and(i32a, 0, 1);

assert(
  $262.agent.getReport() >= TIMEOUT,
  'The result of `(lapse >= TIMEOUT)` is true'
);

assert.sameValue(
  $262.agent.getReport(),
  'timed-out',
  'await Atomics.wait(i32a, 0, 0, ${TIMEOUT}).value resolves to "timed-out"'
);

assert.sameValue(
  Atomics.notify(i32a, 0),
  0,
  'Atomics.notify(i32a, 0) returns 0'
);
