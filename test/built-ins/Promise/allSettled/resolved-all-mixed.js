// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettled
description: >
  Resolution is a collection of all the settled values (fulfilled and rejected)
info: |
  Runtime Semantics: PerformPromiseAllSettled

  6. Repeat,
    ...
    j. Let steps be the algorithm steps defined in Promise.allSettled Resolve Element Functions.
    k. Let resolveElement be ! CreateBuiltinFunction(steps, « [[AlreadyCalled]], [[Index]], [[Values]], [[Capability]], [[RemainingElements]] »).
    ...
    r. Let rejectSteps be the algorithm steps defined in Promise.allSettled Reject Element Functions.
    s. Let rejectElement be ! CreateBuiltinFunction(rejectSteps, « [[AlreadyCalled]], [[Index]], [[Values]], [[Capability]], [[RemainingElements]] »).
    ...
    z. Perform ? Invoke(nextPromise, "then", « resolveElement, rejectElement »).

  Promise.allSettled Resolve Element Functions

  9. Let obj be ! ObjectCreate(%ObjectPrototype%).
  10. Perform ! CreateDataProperty(obj, "status", "fulfilled").
  11. Perform ! CreateDataProperty(obj, "value", x).
  12. Set values[index] to be obj.
  13. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] - 1.
  14. If remainingElementsCount.[[Value]] is 0, then
    a. Let valuesArray be ! CreateArrayFromList(values).
    b. Return ? Call(promiseCapability.[[Resolve]], undefined, « valuesArray »).

  Promise.allSettled Reject Element Functions

  9. Let obj be ! ObjectCreate(%ObjectPrototype%).
  10. Perform ! CreateDataProperty(obj, "status", "rejected").
  11. Perform ! CreateDataProperty(obj, "reason", x).
  12. Set values[index] to be obj.
  13. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] - 1.
  14. If remainingElementsCount.[[Value]] is 0, then
    a. Let valuesArray be CreateArrayFromList(values).
    b. Return ? Call(promiseCapability.[[Resolve]], undefined, « valuesArray »).
flags: [async]
---*/

var obj1 = {};
var obj2 = {};
var r1 = new Promise(function(_, reject) {
  reject(1);
});
var f1 = new Promise(function(resolve) {
  resolve(2);
});
var f2 = new Promise(function(resolve) {
  resolve('tc39');
});
var r2 = new Promise(function(_, reject) {
  reject('test262');
});
var r3 = new Promise(function(_, reject) {
  reject(obj1);
});
var f3 = new Promise(function(resolve) {
  resolve(obj2);
});

Promise.allSettled([r1, f1, f2, r2, r3, f3]).then(function(settled) {
  assert.sameValue(settled.length, 6);
  // r1
  assert.sameValue(settled[0].reason, 1);
  assert.sameValue(settled[0].status, 'rejected');
  // f1
  assert.sameValue(settled[1].value, 2);
  assert.sameValue(settled[1].status, 'fulfilled');
  // f2
  assert.sameValue(settled[2].value, 'tc39');
  assert.sameValue(settled[2].status, 'fulfilled');
  // r2
  assert.sameValue(settled[3].reason, 'test262');
  assert.sameValue(settled[3].status, 'rejected');
  // r3
  assert.sameValue(settled[4].reason, obj1);
  assert.sameValue(settled[4].status, 'rejected');
  // r4
  assert.sameValue(settled[5].value, obj2);
  assert.sameValue(settled[5].status, 'fulfilled');
}).then($DONE, $DONE);
