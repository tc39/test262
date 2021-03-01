// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Explicit iterator closing in response to error from `Promise.resolve`
esid: sec-promise-anysettled
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
features: [Symbol.iterator, Promise.anySettled]
---*/

var iterDoneSpy = {};
var returnCount = 0;
iterDoneSpy[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        value: null,
        done: false
      };
    },
    return: function() {
      returnCount += 1;
      return {};
    }
  };
};

Promise.resolve = function() {
  throw err;
};

Promise.anySettled(iterDoneSpy);

assert.sameValue(returnCount, 1);
