// Copyright (C) 2019 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Invocation of the constructor's `resolve` method
esid: sec-promise.any
info: |
  5. Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).

  Runtime Semantics: PerformPromiseAny

  6. Repeat
    ...
    i. Let nextPromise be ? Call(promiseResolve, constructor, « nextValue »).
    ...
    z. Perform ? Invoke(nextPromise, "then", « resolveElement, rejectElement »).
flags: [async]
features: [Promise.any]
---*/

var p1 = new Promise(function() {});
var p2 = new Promise(function() {});
var p3 = new Promise(function() {});
var resolve = Promise.resolve;
var callCount = 0;
var current = p1;
var next = p2;
var afterNext = p3;

Promise.resolve = function(nextValue) {
  assert.sameValue(
    nextValue, current, '`resolve` invoked with next iterated value'
  );
  assert.sameValue(
    arguments.length, 1, '`resolve` invoked with a single argument'
  );
  assert.sameValue(this, Promise, '`this` value is the constructor');

  current = next;
  next = afterNext;
  afterNext = null;

  callCount += 1;

  return resolve.apply(Promise, arguments);
};

Promise.any([p1, p2, p3])
  .then(function() {
      assert.sameValue(
        callCount, 3, '`resolve` invoked once for each iterated value'
      );
      $DONE();
    }, $DONE);
