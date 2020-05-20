// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-promise.any
description: >
  Iterator is not closed when the "resolve" capability returns an abrupt
  completion.
info: |
  Let C be the this value.
  Let promiseCapability be ? NewPromiseCapability(C).
  Let iteratorRecord be GetIterator(iterable).
  IfAbruptRejectPromise(iteratorRecord, promiseCapability).
  Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).
  If result is an abrupt completion, then
    If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
    IfAbruptRejectPromise(result, promiseCapability).
  Return Completion(result).

features: [Promise.any, Symbol.iterator]
---*/

let nextCount = 0;
let returnCount = 0;
let iter = {};
iter[Symbol.iterator] = function() {
  return {
    next() {
      nextCount += 1;
      return {
        done: true
      };
    },
    return() {
      returnCount += 1;
      return {};
    }
  };
};
let P = function(executor) {
  return new Promise(function(resolve) {
    executor(resolve, function() {
      throw new Test262Error();
    });
  });
};

P.resolve = Promise.resolve;

Promise.any.call(P, iter);

assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
