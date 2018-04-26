// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  An undefined index arg should translate to 0
info: |
  Atomics.wake( typedArray, index, count )

  2.Let i be ? ValidateAtomicAccess(typedArray, index).
    ...
      2.Let accessIndex be ? ToIndex(requestIndex).

      9.If IsSharedArrayBuffer(buffer) is false, throw a TypeError exception.
        ...
          3.If bufferData is a Data Block, return false

          If value is undefined, then
          Let index be 0.
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(
  `
$262.agent.receiveBroadcast(function(sab) { 
  var i32a = new Int32Array(sab);
  $262.agent.report(Atomics.wait(i32a, 0, 0, 200));
  $262.agent.leaving();
})


`)

;$262.agent.start(
  `
$262.agent.receiveBroadcast(function(sab) { 
  var i32a = new Int32Array(sab);
  $262.agent.report(Atomics.wait(i32a, 0, 0, 200));
  $262.agent.leaving();
})
`);

var sab = new SharedArrayBuffer(4);
var i32a = new Int32Array(sab);

$262.agent.broadcast(i32a.buffer);

$262.agent.sleep(100); // halfway through timeout

assert.sameValue(Atomics.wake(i32a, undefined, 1), 1); // wake at index 0
assert.sameValue(getReport(), "ok");

assert.sameValue(Atomics.wake(i32a), 1); // wake again at index 0
assert.sameValue(getReport(), "ok");

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}
