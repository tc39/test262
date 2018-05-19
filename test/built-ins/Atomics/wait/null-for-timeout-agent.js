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
    $262.agent.sleep(10);
  }
  return r;
}

$262.agent.start(
  `
var valueOf = {
  valueOf: function() {
    return null;
  }
};

var toPrimitive = {
  [Symbol.toPrimitive]: function() {
    return null;
  }
};

$262.agent.receiveBroadcast(function(sab) {
  var i32a = new Int32Array(sab);
  var before = $262.agent.monotonicNow();
  $262.agent.report(Atomics.wait(i32a, 0, 0, null));
  $262.agent.report(Atomics.wait(i32a, 0, 0, valueOf));
  $262.agent.report(Atomics.wait(i32a, 0, 0, toPrimitive));
  $262.agent.report($262.agent.monotonicNow() - before);
  $262.agent.leaving();
});
`);

var i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(150);

assert.sameValue(getReport(), 'timed-out');
assert.sameValue(getReport(), 'timed-out');
assert.sameValue(getReport(), 'timed-out');

var timeDiffReport = getReport();

assert(timeDiffReport >= 0, 'timeout should be a min of 0ms');

assert(timeDiffReport <= $ATOMICS_MAX_TIME_EPSILON, 'timeout should be a max of $ATOMICS_MAX_TIME_EPSILON');

assert.sameValue(Atomics.wake(i32a, 0), 0);

