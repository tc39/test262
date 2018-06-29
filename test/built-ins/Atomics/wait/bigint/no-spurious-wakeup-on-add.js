// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Waiter does not spuriously wake on index which is subject to Add operation
includes: [atomicsHelper.js]
features: [ArrayBuffer, DataView, let, arrow-function, for-of, Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

const TIMEOUT = 200;
const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    const before = $262.agent.monotonicNow();
    const unpark = Atomics.wait(i64a, 0, 0n, ${TIMEOUT});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(10);

Atomics.add(i64a, 0, 1n);

const lapse = $262.agent.getReport();
assert(
  lapse >= TIMEOUT,
  'The result of `(lapse >= TIMEOUT)` is true'
);
assert.sameValue(
  $262.agent.getReport(),
  'timed-out',
  '$262.agent.getReport() returns "timed-out"'
);
assert.sameValue(Atomics.wake(i64a, 0), 0, 'Atomics.wake(i64a, 0) returns 0');


