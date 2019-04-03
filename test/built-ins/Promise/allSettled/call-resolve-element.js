// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettled-resolve-element-functions
description: >
  Cannot change result value of resolved Promise.allSettled element.
info: |
  Promise.allSettled Resolve Element Functions

  1. Let F be the active function object.
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
    assert.sameValue(values.length, 1, "values length");
    assert.sameValue(values[0], "expectedValue", "values[0]");
  }
  executor(resolve, $ERROR);
}
Constructor.resolve = function(v) {
  return v;
};

var p1 = {
  then(onFulfilled, onRejected) {
    onFulfilled("expectedValue");
    onFulfilled("unexpectedValue");
  }
};

assert.sameValue(callCount, 0, "callCount before call to all()");

Promise.allSettled.call(Constructor, [p1]);

assert.sameValue(callCount, 1, "callCount after call to all()");
