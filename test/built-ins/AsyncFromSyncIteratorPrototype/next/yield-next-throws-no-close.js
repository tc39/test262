// Copyright (C) 2026 Convex, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%asyncfromsynciteratorprototype%.next
description: >
  async `yield*` on a sync iterator rejects without closing it if IteratorNext abruptly completes.
info: |
  %AsyncFromSyncIteratorPrototype%.next ( [ value ] )
  ...
  5. If value is present, then
    a. Let result be Completion(IteratorNext(syncIteratorRecord, value)).
  ...
  7. IfAbruptRejectPromise(result, promiseCapability).
  ...

  YieldExpression : yield * AssignmentExpression
  ...
  8. Repeat,
    a. If received is a normal completion, then
      i. Let innerResult be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « received.[[Value]] »).
      ii. If genKind is async, set innerResult to ? Await(innerResult).
    ...
flags: [async]
features: [async-iteration]
includes: [asyncHelpers.js]
---*/

var returnCount = 0;
function Thrown() {}

const syncIterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    throw new Thrown();
  },
  return() {
    returnCount += 1;
    return {};
  }
};

async function* asyncIterator() {
  yield* syncIterator;
}

asyncTest(async () => {
  await assert.throwsAsync(Thrown, () => asyncIterator().next(), "Promise should be rejected");
  assert.sameValue(returnCount, 0);
});
