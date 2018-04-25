// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Demonstrates that Atomics.store(...) is causing a waiting
features: [Atomics, computed-property-names, SharedArrayBuffer, TypedArray]
---*/
function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

const TWO_SECOND_TIMEOUT = 2000;
const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    var i64a = new BigInt64Array(sab);
    var before = Date.now();
    $262.agent.report("ready");
    Atomics.wait(i64a, 0, 0, ${TWO_SECOND_TIMEOUT});
    $262.agent.report(Date.now() - before);
    $262.agent.leaving();
  });
`);

$262.agent.broadcast(i64a.buffer);

assert.sameValue(getReport(), "ready");

Atomics.store(i64a, 0, 0x111111);

// We should expect that the waiting agents will continue to
// wait until they both timeout. If either of them reports
// a value that is less than the timeout value, it may mean that
// calling Atomics.store(...) is causing the agents to wake.
//
var lapse = getReport();

assert(
  lapse >= TWO_SECOND_TIMEOUT,
  `${lapse} should be at least ${TWO_SECOND_TIMEOUT}`
);
