// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  False timeout arg should result in an +0 timeout
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4. Let q be ? ToNumber(timeout).

    Boolean -> If argument is true, return 1. If argument is false, return +0.

features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

$262.agent.start(`
var valueOf = {
  valueOf: function() {
    return false;
  }
};

var toPrimitive = {
  [Symbol.toPrimitive]: function() {
    return false;
  }
};

$262.agent.receiveBroadcast(function(sab) {
  var i64a = new BigInt64Array(sab);
  var start = $262.agent.monotonicNow();
  $262.agent.report(Atomics.wait(i64a, 0, 0, false));
  $262.agent.report(Atomics.wait(i64a, 0, 0, valueOf));
  $262.agent.report(Atomics.wait(i64a, 0, 0, toPrimitive));
  $262.agent.report($262.agent.monotonicNow() - start);
  $262.agent.leaving();
});
`);

var i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(150);

assert.sameValue(getReport(), 'timed-out');
assert.sameValue(getReport(), 'timed-out');
assert.sameValue(getReport(), 'timed-out');

var timeDiffReport = getReport();

assert(timeDiffReport >= 0, 'timeout should be a min of 0ms');

assert(timeDiffReport <= $ATOMICS_MAX_TIME_EPSILON, 'timeout should be a max of $$ATOMICS_MAX_TIME_EPSILON');

assert.sameValue(Atomics.wake(i64a, 0), 0);

