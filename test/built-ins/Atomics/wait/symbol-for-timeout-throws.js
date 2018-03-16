// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Symbol for timeout arg throws a TypeError
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4.Let q be ? ToNumber(timeout).
    ...
    Symbol	Throw a TypeError exception.
features: [ Atomics ]
---*/

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null)
    $262.agent.sleep(100);
  return r;
}

var sab = new SharedArrayBuffer(1024);
var int32Array = new Int32Array(sab);

$262.agent.start(
  `
$262.agent.receiveBroadcast(function (sab) {
  var int32Array = new Int32Array(sab);
  
  try {
    Atomics.wait(int32Array, 0, 0, Symbol('foo'));
  } catch (e) {
    $262.agent.report(e.name);
  }
  
  $262.agent.leaving();
})
`);

var int32Array = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(int32Array.buffer);

$262.agent.sleep(150);

assert.sameValue(getReport(), 'TypeError');

assert.sameValue(Atomics.wake(int32Array, 0), 0);
