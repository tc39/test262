// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Returns "not-equal" when value of index is not equal
info: |
  Atomics.wait( typedArray, index, value, timeout )

  14.If v is not equal to w, then
    a.Perform LeaveCriticalSection(WL).
    b. Return the String "not-equal".

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(Atomics.wait(i32a, 0, 44, 1000));
    $262.agent.report(Atomics.wait(i32a, 0, 251.4, 1000));
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(100);

assert.sameValue($262.agent.getReport(), 'not-equal');
assert.sameValue($262.agent.getReport(), 'not-equal');
assert.sameValue(Atomics.wake(i32a, 0), 0);
