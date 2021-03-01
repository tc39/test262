// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Promise.anySettled` invoked on a constructor value
esid: sec-promise-anysettled
info: |
    1. Let C be the this value.
    [...]
    6. Let promiseCapability be NewPromiseCapability(C).
    [...]
    10. Let iteratorRecord be Record {[[iterator]]: iterator, [[done]]: false}.
    11. Let result be PerformPromiseAnySettled(iteratorRecord, promiseCapability, C).
    [...]
    13. Return Completion(result).
features: [classfeatures, Promise.anySettled]
---*/

var executor = null;
var callCount = 0;

class SubPromise extends Promise {
  constructor(a) {
    super(a);
    executor = a;
    callCount += 1;
  }
}

var instance = Promise.anySettled.call(SubPromise, []);

assert.sameValue(instance.constructor, SubPromise);
assert.sameValue(instance instanceof SubPromise, true);

assert.sameValue(callCount, 1);
assert.sameValue(typeof executor, 'function');
