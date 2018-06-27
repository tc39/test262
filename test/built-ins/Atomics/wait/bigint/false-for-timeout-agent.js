// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  False timeout arg should result in an +0 timeout
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4. Let q be ? ToNumber(timeout).

    Boolean -> If argument is true, return 1. If argument is false, return +0.

includes: [atomicsHelper.js]
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  const valueOf = {
    valueOf: function() {
      return false;
    }
  };

  const toPrimitive = {
    [Symbol.toPrimitive]: function() {
      return false;
    }
  };

  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    const before = $262.agent.monotonicNow();
    $262.agent.report(Atomics.wait(i64a, 0, 0n, false));
    $262.agent.report(Atomics.wait(i64a, 0, 0n, valueOf));
    $262.agent.report(Atomics.wait(i64a, 0, 0n, toPrimitive));
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.leaving();
  });
`);

const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8)
);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(100);

assert.sameValue(
  $262.agent.getReport(),
  'timed-out',
  '$262.agent.getReport() returns "timed-out"'
);
assert.sameValue(
  $262.agent.getReport(),
  'timed-out',
  '$262.agent.getReport() returns "timed-out"'
);
assert.sameValue(
  $262.agent.getReport(),
  'timed-out',
  '$262.agent.getReport() returns "timed-out"'
);

const lapse = $262.agent.getReport();
assert(
  lapse >= 0,
  'The result of `(lapse >= 0)` is true'
);
assert(
  lapse <= $262.agent.MAX_TIME_EPSILON,
  'The result of `(lapse <= $262.agent.MAX_TIME_EPSILON)` is true'
);
assert.sameValue(Atomics.wake(i64a, 0), 0, 'Atomics.wake(i64a, 0) returns 0');

