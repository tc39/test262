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

features: [Atomics, SharedArrayBuffer, TypedArray]
includes: [ atomicsHelper.js ]
---*/

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(100);
  }
  return r;
}

$262.agent.start(
  `
var valueOf = {
  valueOf: function() {
    return 0;
  }
};

var toString = {
  toString: function() {
    return "0";
  }
};

var toPrimitive = {
  [Symbol.toPrimitive]: function() {
    return 0;
  }
};


$262.agent.receiveBroadcast(function (sab) {
  var int32Array = new Int32Array(sab);
  var start = Date.now();
  $262.agent.report(Atomics.wait(int32Array, 0, 0, valueOf));
  $262.agent.report(Atomics.wait(int32Array, 0, 0, toString));
  $262.agent.report(Atomics.wait(int32Array, 0, 0, toPrimitive));
  $262.agent.report(Date.now() - start);
  $262.agent.leaving();
})
`);

var int32Array = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(int32Array.buffer);
$262.agent.sleep(150);

assert.sameValue(getReport(), 'timed-out');
assert.sameValue(getReport(), 'timed-out');
assert.sameValue(getReport(), 'timed-out');

var timeDiffReport = getReport();

assert(timeDiffReport >= 0, 'timeout should be a min of 0ms');

assert(timeDiffReport <= $ATOMICS_MAX_TIME_EPSILON, 'timeout should be a max of $$ATOMICS_MAX_TIME_EPSILON');

assert.sameValue(Atomics.wake(int32Array, 0), 0);

