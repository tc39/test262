// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Demonstrates that Atomics.store(...) is causing a waiting
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
const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    var i64a = new BigInt64Array(sab);
    var before = $262.agent.monotonicNow();
    var unpark = Atomics.wait(i64a, 0, 0, ${TIMEOUT});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(100);

Atomics.add(i64a, 0, 1);

const lapse = getReport();
assert(
  lapse >= TIMEOUT,
  `${lapse} should be at least ${TIMEOUT}`
);
assert.sameValue(getReport(), 'timed-out');
assert.sameValue(Atomics.wake(i64a, 0), 0);


