// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait returns the right result when it timed out and that
  the time to time out is reasonable.
  info: |
    17. Let awoken be Suspend(WL, W, t).
    18. If awoken is true, then
      a. Assert: W is not on the list of waiters in WL.
    19. Else,
      a.Perform RemoveWaiter(WL, W).
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
  $262.agent.receiveBroadcast(function(sab, id) {
    const i64a = new BigInt64Array(sab);
    const then = $262.agent.monotonicNow();
    $262.agent.report(Atomics.wait(i64a, 0, 0, 500)); // Timeout 500ms
    $262.agent.report($262.agent.monotonicNow() - then); // Actual time can be more than 500ms
    $262.agent.leaving();
  });
`);

const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT)
);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(100);
assert.sameValue(getReport(), "timed-out");
assert.sameValue((getReport() | 0) >= 500 - $ATOMICS_MAX_TIME_EPSILON, true);

