// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Passing an object with no callable methods for the timeout param throws
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4.Let q be ? ToNumber(timeout).
    ...
    Object
      Apply the following steps:
      Let primValue be ? ToPrimitive(argument, hint Number).
        ...
          g. Return ? OrdinaryToPrimitive(input, hint).
            ...
            6.Throw a TypeError exception.
features: [ Atomics ]
---*/

var sab = new SharedArrayBuffer(4);
var int32Array = new Int32Array(sab);

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(100);
  }
  return r;
}

$262.agent.start(
  `
$262.agent.receiveBroadcast(function (sab) {
  var poisoned = {
    valueOf: false,
    toString: false
  };

  var err;
  
  try {
    Atomics.wait(int32Array, 0, 0, poisoned);
  } catch(e) {
    err = e.constructor;
  }

  $262.agent.report(err);
  $262.agent.leaving();
})
`);

var int32Array = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(int32Array.buffer);

$262.agent.sleep(150);

assert.sameValue(getReport(), TypeError);
