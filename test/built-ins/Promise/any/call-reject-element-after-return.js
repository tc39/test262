// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any-reject-element-functions
description: >
  Cannot change result value of rejected Promise.any element after Promise.any() returned.
info: |
  Promise.any Reject Element Functions

  Let alreadyCalled be the value of F's [[AlreadyCalled]] internal slot.
  If alreadyCalled.[[value]] is true, return undefined.
  Set alreadyCalled.[[value]] to true.

features: [Promise.any]
---*/

let callCount = 0;
let errorArray;

function Constructor(executor) {
  function reject(error) {
    callCount += 1;
    errorArray = error.errors;

    assert(Array.isArray(error.errors), "error is array");
    assert.sameValue(error.errors.length, 1, "error.length");
    assert.sameValue(error.errors[0], "onRejectedValue", "error[0]");
    assert(error instanceof AggregateError, "error instanceof AggregateError");
  }
  executor($ERROR, reject);
}
Constructor.resolve = function(v) {
  return v;
};

let p1OnRejected;

let p1 = {
  then(onFulfilled, onRejected) {
    p1OnRejected = onRejected;
    onRejected("onRejectedValue");
  }
};

assert.sameValue(callCount, 0, "callCount before call to any()");

Promise.any.call(Constructor, [p1]);

assert.sameValue(callCount, 1, "callCount after call to any()");
assert.sameValue(errorArray[0], "onRejectedValue", "errorArray after call to any()");

p1OnRejected("unexpectedonRejectedValue");

assert.sameValue(callCount, 1, "callCount after call to onRejected()");
assert.sameValue(errorArray[0], "onRejectedValue", "errorArray after call to onRejected()");
