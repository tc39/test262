// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettled-reject-element-functions
description: The [[Prototype]] of Promise.allSettled Reject Element functions
info: |
  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified every built-in function and every built-in
    constructor has the Function prototype object, which is the initial
    value of the expression Function.prototype (19.2.3), as the value of
    its [[Prototype]] internal slot.
---*/

var rejectElementFunction;
var thenable = {
  then(_, reject) {
    rejectElementFunction = reject;
  }
};

function NotPromise(executor) {
  executor(function() {}, function() {});
}
NotPromise.resolve = function(v) {
  return v;
};
Promise.allSettled.call(NotPromise, [thenable]);

assert.sameValue(Object.getPrototypeOf(rejectElementFunction), Function.prototype);
