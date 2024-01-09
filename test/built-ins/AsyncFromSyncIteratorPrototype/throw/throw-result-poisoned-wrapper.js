// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%asyncfromsynciteratorprototype%.throw
description: throw() will reject promise if resolving result promise abrupt completes.
info: |
  %AsyncFromSyncIteratorPrototype%.throw ( value )
  ...
  3. Let promiseCapability be ! NewPromiseCapability(%Promise%).
  4. Let syncIteratorRecord be O.[[SyncIteratorRecord]].
  5. Let syncIterator be syncIteratorRecord.[[Iterator]].
  6. Let throw be GetMethod(syncIterator, "throw").
  7. IfAbruptRejectPromise(throw, promiseCapability).
  8. If throw is undefined, then
    ...
  9. If value is present, then
    ...
  10. Else,
    a. Let result be Call(throw, syncIterator).
  ...
  13. Return ! AsyncFromSyncIteratorContinuation(result, promiseCapability, syncIteratorRecord, true).

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

var returnCount = 0;
var thrownError = new Error("Catch me.");
var uncaughtError = new Error("Don't catch me");

const obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: 1, done: false };
      },
      throw() {
        const p = Promise.resolve('FAIL');
        Object.defineProperty(p, 'constructor', {
          get() {
            throw thrownError;
          }
        });
        return { value: p, done: false };
      },
      return() {
        returnCount += 1;
        return { value: undefined, done: true };
      }
    };
  }
};

async function* asyncg() {
  return yield* obj;
}

let iter = asyncg();

iter.next().then(
  function (result) {
    iter.throw(uncaughtError).then(
      function (result) {
        throw new Test262Error("Resolving promise should throw.");
      },
      function (err) {
        assert.sameValue(err, thrownError, "Resolving promise should be rejected with thrown error");
        assert.sameValue(returnCount, 1);

        iter.next().then(function (result) {
          assert.sameValue(result.done, true, 'the iterator is completed');
          assert.sameValue(result.value, undefined, 'value is undefined');
        }).then($DONE, $DONE);
      }
    ).then($DONE, $DONE);
  }
).then($DONE, $DONE);
