// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  False timeout arg should result in an +0 timeout
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4. Let q be ? ToNumber(timeout).

    Null -> Return +0.

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/
$262.agent.start(`
  const valueOf = {
    valueOf: function() {
      return 0;
    }
  };

  const toString = {
    toString: function() {
      return "0";
    }
  };

  const toPrimitive = {
    [Symbol.toPrimitive]: function() {
      return 0;
    }
  };

  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const before = $262.agent.monotonicNow();
    $262.agent.report(Atomics.wait(i32a, 0, 0, valueOf));
    $262.agent.report(Atomics.wait(i32a, 0, 0, toString));
    $262.agent.report(Atomics.wait(i32a, 0, 0, toPrimitive));
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(150);

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

assert(lapse >= 0, 'The result of `(lapse >= 0)` is true (The result of `(lapse >= 0)` is true (timeout should be a min of 0ms))');

assert(lapse <= $262.agent.MAX_TIME_EPSILON, 'The result of `(lapse <= $262.agent.MAX_TIME_EPSILON)` is true (The result of `(lapse <= $262.agent.MAX_TIME_EPSILON)` is true (timeout should be a max of $$262.agent.MAX_TIME_EPSILON))');

assert.sameValue(Atomics.wake(i32a, 0), 0, 'Atomics.wake(i32a, 0) returns 0');

