// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Throws a TypeError if index arg can not be converted to an Integer
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4. Let q be ? ToNumber(timeout).

    Symbol --> Throw a TypeError exception.

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, Symbol, Symbol.toPrimitive, TypedArray]
---*/
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const start = $262.agent.monotonicNow();
    try {
      Atomics.wait(i32a, 0, 0, Symbol("1"));
    } catch (error) {
      $262.agent.report('Symbol("1")');
    }
    try {
      Atomics.wait(i32a, 0, 0, Symbol("2"));
    } catch (error) {
      $262.agent.report('Symbol("2")');
    }
    $262.agent.report($262.agent.monotonicNow() - start);
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(150);

assert.sameValue($262.agent.getReport(), 'Symbol("1")');
assert.sameValue($262.agent.getReport(), 'Symbol("2")');

const lapse = $262.agent.getReport();

assert(lapse >= 0, 'timeout should be a min of 0ms');
assert(lapse <= $262.agent.MAX_TIME_EPSILON, 'timeout should be a max of $$262.agent.MAX_TIME_EPSILON');

assert.sameValue(Atomics.wake(i32a, 0), 0);
