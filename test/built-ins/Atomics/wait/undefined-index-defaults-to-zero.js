// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.wait
description: >
  An undefined index arg should translate to 0
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
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    $262.agent.report(Atomics.wait(i32a, undefined, 0, 1000)); // undefined index => 0
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(150);

assert.sameValue(Atomics.wake(i32a, 0), 1); // wake at index 0
assert.sameValue(Atomics.wake(i32a, 0), 0); // wake again at index 0, and 0 agents should be woken
assert.sameValue(getReport(), 'ok');
