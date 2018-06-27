// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Returns "not-equal" when value arg does not match an index in the typedArray
info: |
  Atomics.wait( typedArray, index, value, timeout )

  3.Let v be ? ToInt32(value).
    ...
  14.If v is not equal to w, then
    a.Perform LeaveCriticalSection(WL).
    b. Return the String "not-equal".

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var value = 42;

$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);

    $262.agent.report(Atomics.store(i32a, 0, ${value}));
    $262.agent.report(Atomics.wait(i32a, 0, 0));
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.broadcast(i32a.buffer);
$262.agent.sleep(100);
assert.sameValue(
  $262.agent.getReport(),
  value.toString(),
  '$262.agent.getReport() returns value.toString()'
);
assert.sameValue(
  $262.agent.getReport(),
  'not-equal',
  '$262.agent.getReport() returns "not-equal"'
);

