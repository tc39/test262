// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
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
includes: [atomicsHelper.js]
features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

const TIMEOUT = 500;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab, id) {
    const i64a = new BigInt64Array(sab);
    const before = $262.agent.monotonicNow();
    const unpark = Atomics.wait(i64a, 0, 0, ${TIMEOUT});
    $262.agent.report($262.agent.monotonicNow() - before);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);

const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8)
);

$262.agent.broadcast(i64a.buffer);
$262.agent.sleep(10);

// NO OPERATION OCCURS HERE!

const lapse = getReport();
assert(
  lapse >= TIMEOUT,
  `${lapse} should be at least ${TIMEOUT}`
);
assert.sameValue(getReport(), 'timed-out');
assert.sameValue(Atomics.wake(i64a, 0), 0);
