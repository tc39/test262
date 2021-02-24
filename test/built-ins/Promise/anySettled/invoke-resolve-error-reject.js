// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Promise rejection in response to error from `Promise.resolve`
esid: sec-promise.anySettled
info: |
    [...]
    11. Let result be PerformPromiseAnySettled(iteratorRecord, promiseCapability, C).
    12. If result is an abrupt completion, then
        a. If iteratorRecord.[[done]] is false, let result be
           IteratorClose(iterator,result).
        b. IfAbruptRejectPromise(result, promiseCapability).


    25.4.4.3.1 Runtime Semantics: PerformPromiseAnySettled

    1. Repeat
       [...]
       h. Let nextPromise be Invoke(C, "resolve", «nextValue»).
       i. ReturnIfAbrupt(nextPromise).
flags: [async]
---*/

var err = new Test262Error();
var CustomPromise = function(executor) {
  return new Promise(executor);
};

CustomPromise.resolve = function() {
  throw err;
};

Promise.anySettled.call(CustomPromise, [1])
  .then(function() {
    $ERROR('The promise should be rejected.');
  }, function(reason) {
    assert.sameValue(reason, err);
    $DONE();
  });
