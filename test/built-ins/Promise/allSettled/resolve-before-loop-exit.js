// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performpromiseallsettled
description: >
  Cannot tamper remainingElementsCount when two Promise.allSettled resolve element functions are called in succession.
info: |
  Runtime Semantics: PerformPromiseAllSettled ( iteratorRecord, constructor, resultCapability )

  4. Let remainingElementsCount be a new Record { [[Value]]: 1 }.
  ...
  6.d ...
    ii. Set remainingElementsCount.[[value]] to remainingElementsCount.[[value]] − 1.
    iii. If remainingElementsCount.[[value]] is 0, then
      1. Let valuesArray be CreateArrayFromList(values).
      2. Perform ? Call(resultCapability.[[Resolve]], undefined, « valuesArray »).
  ...

  Promise.allSettled Resolve Element Functions

  2. Let alreadyCalled be F.[[AlreadyCalled]].
  3. If alreadyCalled.[[Value]] is true, return undefined.
  4. Set alreadyCalled.[[Value]] to true.
  ...
---*/

var callCount = 0;

function Constructor(executor) {
  function resolve(values) {
    callCount += 1;
    assert(Array.isArray(values), "values is array");
    assert.sameValue(values.length, 3, "values length");
    assert.sameValue(values[0], "p1-fulfill", "values[0]");
    assert.sameValue(values[1], "p2-fulfill", "values[1]");
    assert.sameValue(values[2], "p3-fulfill", "values[2]");
  }
  executor(resolve, $ERROR);
}
Constructor.resolve = function(v) {
  return v;
};

var p1OnFulfilled;

var p1 = {
  then(onFulfilled, onRejected) {
    p1OnFulfilled = onFulfilled;
  }
};
var p2 = {
  then(onFulfilled, onRejected) {
    p1OnFulfilled("p1-fulfill");
    onFulfilled("p2-fulfill");
  }
};
var p3 = {
  then(onFulfilled, onRejected) {
    onFulfilled("p3-fulfill");
  }
};

assert.sameValue(callCount, 0, "callCount before call to all()");

Promise.allSettled.call(Constructor, [p1, p2, p3]);

assert.sameValue(callCount, 1, "callCount after call to all()");
