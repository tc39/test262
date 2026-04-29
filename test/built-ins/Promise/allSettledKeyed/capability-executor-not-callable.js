// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettledkeyed
description: >
  Throws a TypeError if either resolve or reject capability is not callable.
info: |
  Promise.allSettledKeyed ( promises )

  ...
  2. Let promiseCapability be ? NewPromiseCapability(C).

  NewPromiseCapability ( C )

  ...
  4. Let executor be a new built-in function object as defined in
     GetCapabilitiesExecutor Functions.
  5. Set the [[Capability]] internal slot of executor to promiseCapability.
  6. Let promise be ? Construct(C, « executor »).
  ...
  8. If IsCallable(promiseCapability.[[Resolve]]) is false, throw a TypeError exception.
  9. If IsCallable(promiseCapability.[[Reject]]) is false, throw a TypeError exception.
features: [await-dictionary]
---*/

var checkPoint = "";
function fn1(executor) {
  checkPoint += "a";
}
assert.throws(TypeError, function() {
  Promise.allSettledKeyed.call(fn1, {});
}, "executor not called at all");
assert.sameValue(checkPoint, "a", "executor not called at all");

checkPoint = "";
function fn2(executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
}
assert.throws(TypeError, function() {
  Promise.allSettledKeyed.call(fn2, {});
}, "executor called with no arguments");
assert.sameValue(checkPoint, "ab", "executor called with no arguments");

checkPoint = "";
function fn3(executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
}
assert.throws(TypeError, function() {
  Promise.allSettledKeyed.call(fn3, {});
}, "executor called with (undefined, undefined)");
assert.sameValue(checkPoint, "ab", "executor called with (undefined, undefined)");

checkPoint = "";
function fn4(executor) {
  checkPoint += "a";
  executor(undefined, function() {});
  checkPoint += "b";
}
assert.throws(TypeError, function() {
  Promise.allSettledKeyed.call(fn4, {});
}, "executor called with (undefined, function)");
assert.sameValue(checkPoint, "ab", "executor called with (undefined, function)");

checkPoint = "";
function fn5(executor) {
  checkPoint += "a";
  executor(function() {}, undefined);
  checkPoint += "b";
}
assert.throws(TypeError, function() {
  Promise.allSettledKeyed.call(fn5, {});
}, "executor called with (function, undefined)");
assert.sameValue(checkPoint, "ab", "executor called with (function, undefined)");
