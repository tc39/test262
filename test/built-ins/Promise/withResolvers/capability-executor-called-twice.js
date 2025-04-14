// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
description: >
  Throws a TypeError if capabilities executor already called with non-undefined values.
info: |
  Promise.all ( iterable )

  ...
  6. Let promiseCapability be NewPromiseCapability(C).
  7. ReturnIfAbrupt(promiseCapability).
  ...

  GetCapabilitiesExecutor Functions
    ...
    3. If promiseCapability.[[Resolve]] is not undefined, throw a TypeError exception.
    4. If promiseCapability.[[Reject]] is not undefined, throw a TypeError exception.
    5. Set promiseCapability.[[Resolve]] to resolve.
    6. Set promiseCapability.[[Reject]] to reject.
    ...

  PerformPromiseAll ( iteratorRecord, constructor, resultCapability )

  ...
  1. Let promiseResolve be ? Get(constructor, `"resolve"`).
  1. If IsCallable(promiseResolve) is *false*, throw a *TypeError* exception.
  ...
---*/

var checkPoint = "";
function fn1(executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
  executor(function() {}, function() {});
  checkPoint += "c";
}
Promise.withResolvers.call(fn1);
assert.sameValue(checkPoint, "abc", "executor initially called with no arguments");

checkPoint = "";
function fn2(executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
  executor(function() {}, function() {});
  checkPoint += "c";
}
Promise.withResolvers.call(fn2);
assert.sameValue(checkPoint, "abc", "executor initially called with (undefined, undefined)");

checkPoint = "";
function fn3(executor) {
  checkPoint += "a";
  executor(undefined, function() {});
  checkPoint += "b";
  executor(function() {}, function() {});
  checkPoint += "c";
}
assert.throws(TypeError, function() {
  Promise.withResolvers.call(fn3);
}, "executor initially called with (undefined, function)");
assert.sameValue(checkPoint, "ab", "executor initially called with (undefined, function)");

checkPoint = "";
function fn4(executor) {
  checkPoint += "a";
  executor(function() {}, undefined);
  checkPoint += "b";
  executor(function() {}, function() {});
  checkPoint += "c";
}
assert.throws(TypeError, function() {
  Promise.withResolvers.call(fn4);
}, "executor initially called with (function, undefined)");
assert.sameValue(checkPoint, "ab", "executor initially called with (function, undefined)");

checkPoint = "";
function fn5(executor) {
  checkPoint += "a";
  executor("invalid value", 123);
  checkPoint += "b";
  executor(function() {}, function() {});
  checkPoint += "c";
}
assert.throws(TypeError, function() {
  Promise.withResolvers.call(fn5);
}, "executor initially called with (String, Number)");
assert.sameValue(checkPoint, "ab", "executor initially called with (String, Number)");
