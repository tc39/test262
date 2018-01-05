// Copyright (C) 2017 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
author: Jordan Harband
description: finally on a rejected promise can override the rejection reason
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
flags: [async]
---*/

var callbackCount = 0;
var original = {};
var thrown = {};

var p = Promise.reject(original);

p.finally(function () {
  callbackCount++;
  assert.sameValue(arguments.length, 0, 'onFinally receives zero args');
  throw thrown;
}).then(function () {
  $ERROR('promise is rejected; onFulfill should not be called');
}).catch(function (reason) {
  callbackCount++;
  assert.sameValue(reason, thrown, 'onFinally can override the rejection reason by throwing');
}).then(function() {
  assert.sameValue(callbackCount, 2, "both callbacks were called");
  $DONE();
}).catch($ERROR);
