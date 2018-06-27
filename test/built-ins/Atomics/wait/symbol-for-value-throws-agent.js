// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Throws a TypeError if value arg is a Symbol
info: |
  Atomics.wait( typedArray, index, value, timeout )

  3. Let v be ? ToInt32(value).

  ToInt32(value)

  1.Let number be ? ToNumber(argument).

    Symbol --> Throw a TypeError exception.

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, Symbol, Symbol.toPrimitive, TypedArray]
---*/

$262.agent.start(`
  const poisonedValueOf = {
    valueOf: function() {
      throw new Test262Error('should not evaluate this code');
    }
  };

  const poisonedToPrimitive = {
    [Symbol.toPrimitive]: function() {
      throw new Test262Error("passing a poisoned object using @@ToPrimitive");
    }
  };

  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const before = $262.agent.monotonicNow();
    try {
      Atomics.wait(i32a, 0, Symbol("1"), poisonedValueOf);
    } catch (error) {
      $262.agent.report('Symbol("1")');
    }
    try {
      Atomics.wait(i32a, 0, Symbol("2"), poisonedToPrimitive);
    } catch (error) {
      $262.agent.report('Symbol("2")');
    }
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
  'Symbol("1")',
  '$262.agent.getReport() returns "Symbol("1")"'
);
assert.sameValue(
  $262.agent.getReport(),
  'Symbol("2")',
  '$262.agent.getReport() returns "Symbol("2")"'
);

const lapse = $262.agent.getReport();

assert(lapse >= 0, 'The result of `(lapse >= 0)` is true (The result of `(lapse >= 0)` is true (timeout should be a min of 0ms))');
assert(lapse <= $262.agent.MAX_TIME_EPSILON, 'The result of `(lapse <= $262.agent.MAX_TIME_EPSILON)` is true (The result of `(lapse <= $262.agent.MAX_TIME_EPSILON)` is true (timeout should be a max of $$262.agent.MAX_TIME_EPSILON))');

assert.sameValue(Atomics.wake(i32a, 0), 0, 'Atomics.wake(i32a, 0) returns 0');
