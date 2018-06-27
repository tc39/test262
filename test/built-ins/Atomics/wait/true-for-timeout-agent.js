// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  True timeout arg should result in an +0 timeout
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4. Let q be ? ToNumber(timeout).

    Boolean -> If argument is true, return 1. If argument is false, return +0.

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  const valueOf = {
    valueOf: function() {
      return true;
    }
  };

  const toPrimitive = {
    [Symbol.toPrimitive]: function() {
      return true;
    }
  };

  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const start = $262.agent.monotonicNow();
    $262.agent.report(Atomics.wait(i32a, 0, 0, true));
    $262.agent.report(Atomics.wait(i32a, 0, 0, valueOf));
    $262.agent.report(Atomics.wait(i32a, 0, 0, toPrimitive));
    $262.agent.report($262.agent.monotonicNow() - start);
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(150);

assert.sameValue($262.agent.getReport(), 'timed-out');
assert.sameValue($262.agent.getReport(), 'timed-out');
assert.sameValue($262.agent.getReport(), 'timed-out');

const lapse = $262.agent.getReport();

assert(lapse >= 0, 'timeout should be a min of 0ms');

assert(lapse <= $262.agent.MAX_TIME_EPSILON, 'timeout should be a max of $$262.agent.MAX_TIME_EPSILON');

assert.sameValue(Atomics.wake(i32a, 0), 0);

