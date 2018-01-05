// Copyright (C) 2017 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
author: Jordan Harband
description: finally on a rejected promise can not convert to a fulfillment
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
flags: [async]
---*/

var original = {};
var replacement = {};
var callbackCount = 0;

var p = Promise.reject(original);

p.finally(function () {
  callbackCount++;
  assert.sameValue(arguments.length, 0, 'onFinally receives zero args');
  return replacement;
}).then(function () {
  $ERROR('promise is rejected pre-finally; onFulfill should not be called');
}).catch(function (reason) {
  callbackCount++;
  assert.sameValue(reason, original, 'onFinally can not override the rejection value by returning');
}).then(function() {
  assert.sameValue(callbackCount, 2, "both callbacks were called");
  $DONE();
}).catch($ERROR);
