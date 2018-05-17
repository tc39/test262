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

const TWO_SECOND_TIMEOUT = 2000;
const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)
);

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    var i32a = new Int32Array(sab);
    var before = $262.agent.monotonicNow();
    $262.agent.report("ready");
    Atomics.wait(i32a, 0, 0, ${TWO_SECOND_TIMEOUT});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.leaving();
  });
`);

$262.agent.broadcast(i32a.buffer);

assert.sameValue(getReport(), "ready");

Atomics.add(i32a, 0, 1);

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


