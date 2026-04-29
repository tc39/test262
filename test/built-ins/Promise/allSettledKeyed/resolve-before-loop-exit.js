// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performpromiseallkeyed
description: >
  Cannot tamper remainingElementsCount when resolve element functions are called
  synchronously from thenables during the loop.
info: |
  PerformPromiseAllKeyed ( variant, promises, constructor, resultCapability, promiseResolve )

  ...
  4. Let remainingElementsCount be the Record { [[Value]]: 1 }.
  ...
  6. For each element key of allKeys, do
    ...
    b. If desc is not undefined and desc.[[Enumerable]] is true, then
      ...
      vi. Let onFulfilled be a new Abstract Closure ...
        ...
        5. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] - 1.
        6. If remainingElementsCount.[[Value]] = 0, then
          ...
      ...
  7. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] - 1.
  8. If remainingElementsCount.[[Value]] = 0, then
    ...
    NOTE: This can happen even if keys was non-empty if an ill-behaved thenable
    synchronously invoked the callback passed to its "then" method.
features: [await-dictionary]
---*/

var callCount = 0;

function Constructor(executor) {
  function resolve(result) {
    callCount += 1;
    assert.sameValue(Object.getPrototypeOf(result), null, "result is null-prototype");
    var keys = Object.keys(result);
    assert.sameValue(keys.length, 3, "result has 3 keys");
    assert.sameValue(result.a.status, "fulfilled", "result.a.status");
    assert.sameValue(result.a.value, "a-fulfill", "result.a.value");
    assert.sameValue(result.b.status, "fulfilled", "result.b.status");
    assert.sameValue(result.b.value, "b-fulfill", "result.b.value");
    assert.sameValue(result.c.status, "fulfilled", "result.c.status");
    assert.sameValue(result.c.value, "c-fulfill", "result.c.value");
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function(v) {
  return v;
};

var aOnFulfilled;

var input = {
  a: {
    then: function(onFulfilled, onRejected) {
      aOnFulfilled = onFulfilled;
    }
  },
  b: {
    then: function(onFulfilled, onRejected) {
      aOnFulfilled("a-fulfill");
      onFulfilled("b-fulfill");
    }
  },
  c: {
    then: function(onFulfilled, onRejected) {
      onFulfilled("c-fulfill");
    }
  }
};

assert.sameValue(callCount, 0, "callCount before call to allSettledKeyed()");

Promise.allSettledKeyed.call(Constructor, input);

assert.sameValue(callCount, 1, "callCount after call to allSettledKeyed()");
