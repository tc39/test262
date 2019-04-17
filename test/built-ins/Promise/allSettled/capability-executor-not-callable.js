// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettled
description: >
  Throws a TypeError if either resolve or reject capability is not callable.
info: |
  Promise.allSettled ( iterable )

  ...
  3. Let promiseCapability be ? NewPromiseCapability(C).
  ...

  NewPromiseCapability ( C )

  ...
  5. Let executor be CreateBuiltinFunction(steps, « [[Capability]] »).
  6. Set executor.[[Capability]] to promiseCapability.
  7. Let promise be ? Construct(C, « executor »).
  8. If IsCallable(promiseCapability.[[Resolve]]) is false, throw a TypeError exception.
  9. If IsCallable(promiseCapability.[[Reject]]) is false, throw a TypeError exception.
  ...
features: [Promise.allSettled]
---*/

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
  }, []);
}, 'executor not called at all');
assert.sameValue(checkPoint, 'a', 'executor not called at all');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor();
    checkPoint += 'b';
  }, []);
}, 'executor called with no arguments');
assert.sameValue(checkPoint, 'ab', 'executor called with no arguments');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor(undefined, undefined);
    checkPoint += 'b';
  }, []);
}, 'executor called with (undefined, undefined)');
assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, undefined)');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor(undefined, function() {});
    checkPoint += 'b';
  }, []);
}, 'executor called with (undefined, function)');
assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, function)');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor(function() {}, undefined);
    checkPoint += 'b';
  }, []);
}, 'executor called with (function, undefined)');
assert.sameValue(checkPoint, 'ab', 'executor called with (function, undefined)');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor(123, 'invalid value');
    checkPoint += 'b';
  }, []);
}, 'executor called with (Number, String)');
assert.sameValue(checkPoint, 'ab', 'executor called with (Number, String)');
