// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performpromiseallkeyed
description: >
  Cannot tamper remainingElementsCount when an allSettledKeyed resolve element
  function is called before later calls.
info: |
  PerformPromiseAllKeyed ( variant, promises, constructor, resultCapability, promiseResolve )

  ...
  The onFulfilled closure:
    ...
    2. If alreadyCalled.[[Value]] is true, return undefined.
    3. Set alreadyCalled.[[Value]] to true.
features: [await-dictionary]
---*/

var error = new Test262Error();
var resultStartCount = 0;
var resultEndCount = 0;

function Constructor(executor) {
  function resolve(result) {
    resultStartCount += 1;
    assert.sameValue(Object.getPrototypeOf(result), null, "result is null-prototype");
    assert.sameValue(result.key.status, "fulfilled", "first call wins status");
    assert.sameValue(result.key.value, "first", "first call wins value");
    resultEndCount += 1;
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function(value) {
  return value;
};

var input = {
  key: {
    then: function(onFulfilled, onRejected) {
      onFulfilled("first");
      assert.sameValue(onRejected(error), undefined);
      onFulfilled("second");
    }
  }
};

Promise.allSettledKeyed.call(Constructor, input);

assert.sameValue(resultStartCount, 1, "result callback entered once");
assert.sameValue(resultEndCount, 1, "result callback completed once");
