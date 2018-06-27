// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Waiter does not spuriously wake on index which is subject to compareExchange operation
includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

const TIMEOUT = 200;
const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const before = $262.agent.monotonicNow();
    const unpark = Atomics.wait(i32a, 0, 0, ${TIMEOUT});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(10);

Atomics.compareExchange(i32a, 0, 0, 1);

const lapse = $262.agent.getReport();
assert(
  lapse >= TIMEOUT,
  'The result of `(lapse >= TIMEOUT)` is true (The result of `(lapse >= TIMEOUT)` is true)'
);
assert.sameValue(
  $262.agent.getReport(),
  'timed-out',
  '$262.agent.getReport() returns "timed-out"'
);
assert.sameValue(Atomics.wake(i32a, 0), 0, 'Atomics.wake(i32a, 0) returns 0');
