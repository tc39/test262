// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Waiter does not spuriously wake on index which is subject to compareExchange operation
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/
function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

const TIMEOUT = 2000;
const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    const before = $262.agent.monotonicNow();
    const unpark = Atomics.wait(i32a, 0, 0, ${TIMEOUT});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(100);

Atomics.compareExchange(i32a, 0, 0, 1);

const lapse = getReport();
assert(
  lapse >= TIMEOUT,
  `${lapse} should be at least ${TIMEOUT}`
);
assert.sameValue(getReport(), 'timed-out');
assert.sameValue(Atomics.wake(i32a, 0), 0);
