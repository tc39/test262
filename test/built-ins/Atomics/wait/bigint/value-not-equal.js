// Copyright (C) 2018 Amal Hussein.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Returns "not-equal" when value arg does not match an index in the typedArray
info: |
  Atomics.wait( typedArray, index, value, timeout )

  3.Let v be ? ToBigInt64(value).
    ...
  14.If v is not equal to w, then
    a.Perform LeaveCriticalSection(WL).
    b. Return the String "not-equal".

features: [Atomics, BigInt, SharedArrayBuffer, TypedArray]
---*/

function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
}

var value = 42;

$262.agent.start(`
$262.agent.receiveBroadcast(function(sab) {
  var i64a = new BigInt64Array(sab);

  $262.agent.report(Atomics.store(i64a, 0, ${value}));
  $262.agent.report(Atomics.wait(i64a, 0, 0));
  $262.agent.leaving();
});
`);

var i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT));

$262.agent.broadcast(i64a.buffer);

assert.sameValue(getReport(), value.toString());
assert.sameValue(getReport(), "not-equal");

