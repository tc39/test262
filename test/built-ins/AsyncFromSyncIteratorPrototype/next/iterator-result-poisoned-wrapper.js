// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%asyncfromsynciteratorprototype%.next
description: next() will reject promise if resolving result promise abrupt completes.
info: |
  %AsyncFromSyncIteratorPrototype%.next ( value )
  ...
  3. Let promiseCapability be ! NewPromiseCapability(%Promise%).
  4. Let syncIteratorRecord be O.[[SyncIteratorRecord]].
  5. If value is present, then
    ...
  6. Else,
    a. Let result be IteratorNext(syncIteratorRecord).
  7. IfAbruptRejectPromise(result, promiseCapability).
  8. Return ! AsyncFromSyncIteratorContinuation(result, promiseCapability, syncIteratorRecord, true).

  AsyncFromSyncIteratorContinuation ( result, promiseCapability, syncIteratorRecord, closeOnRejection )
  1. Let done be IteratorComplete(result).
  2. IfAbruptRejectPromise(done, promiseCapability).
  3. Let value be IteratorValue(result).
  4. IfAbruptRejectPromise(value, promiseCapability).
  5. Let valueWrapper be PromiseResolve(%Promise%, value).
  6. If valueWrapper is an abrupt completion, done is false, and closeOnRejection is true, then
    a. Set valueWrapper to IteratorClose(syncIteratorRecord, valueWrapper).
  7. IfAbruptRejectPromise(valueWrapper, promiseCapability).
  ...

  IfAbruptRejectPromise ( value, capability )
  1. Assert: value is a Completion Record.
  2. If value is an abrupt completion, then
    a. Perform ? Call(capability.[[Reject]], undefined, « value.[[Value]] »).
    b. Return capability.[[Promise]].
  ...

flags: [async]
features: [async-iteration]
---*/

var finallyCount = 0;
var thrownError = new Error("Catch me.");

function* gen() {
  try {
    const p = Promise.resolve('FAIL');
    Object.defineProperty(p, 'constructor', {
      get() {
        throw thrownError;
      }
    });
    yield p;
  } finally {
    finallyCount += 1;
  }
}

async function* iter() {
  yield* gen();
}

iter().next().then(
  function (result) {
    throw new Test262Error("Resolving promise should throw.");
  },
  function (err) {
    assert.sameValue(err, thrownError, "Resolving promise should be rejected with thrown error");
    assert.sameValue(finallyCount, 1);
  }
).then($DONE, $DONE);
