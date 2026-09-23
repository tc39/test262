// Copyright (C) 2026 Convex, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%asyncfromsynciteratorprototype%.next
description: >
  next() rejects without closing the sync iterator if IteratorNext abruptly completes.
info: |
  %AsyncFromSyncIteratorPrototype%.next ( [ value ] )
  ...
  6. Else,
    a. Let result be Completion(IteratorNext(syncIteratorRecord)).
  7. IfAbruptRejectPromise(result, promiseCapability).
  ...

  ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind, lhsKind, labelSet [ , iteratorKind ] )
  ...
  6. Repeat,
    a. Let nextResult be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]]).
    b. If iteratorKind is async, set nextResult to ? Await(nextResult).
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

asyncTest(async () => {
  await assert.throwsAsync(Thrown, async () => {
    for await (let _ of syncIterator);
  }, "Promise should be rejected");
  assert.sameValue(returnCount, 0);
});
