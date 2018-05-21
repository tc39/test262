// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait returns the right result when it was awoken before
  a timeout
info: |
  Atomics.wait( typedArray, index, value, timeout )

  2.Let i be ? ValidateAtomicAccess(typedArray, index).
    ...
      2.Let accessIndex be ? ToIndex(requestIndex).

      9.If IsSharedArrayBuffer(buffer) is false, throw a TypeError exception.
        ...
          3.If bufferData is a Data Block, return false

          If value is undefined, then
          Let index be 0.
includes: [atomicsHelper.js]
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

var sleeping = 10;
var timeout = 20000;

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const before = $262.agent.monotonicNow();
    const unpark = Atomics.wait(i32a, 0, 0, ${timeout});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(sleeping);

assert.sameValue(Atomics.wake(i32a, 0), 1);

const lapse = getReport();

assert(
  sleeping + lapse < timeout,
  `${sleeping + lapse} should be less than ${timeout}`
);
assert.sameValue(getReport(), 'ok');


