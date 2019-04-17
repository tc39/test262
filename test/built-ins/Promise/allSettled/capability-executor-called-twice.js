// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettled
description: >
  Throws a TypeError if capabilities executor already called with non-undefined values.
info: |
  Promise.allSettled ( iterable )

  ...
  3. Let promiseCapability be ? NewPromiseCapability(C).
  ...

  GetCapabilitiesExecutor Functions

  ...
  4. If promiseCapability.[[Resolve]] is not undefined, throw a TypeError exception.
  5. If promiseCapability.[[Reject]] is not undefined, throw a TypeError exception.
  6. Set promiseCapability.[[Resolve]] to resolve.
  7. Set promiseCapability.[[Reject]] to reject.
  ...
features: [Promise.allSettled]
---*/

var checkPoint = '';
Promise.allSettled.call(function(executor) {
  checkPoint += 'a';
  executor();
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}, []);
assert.sameValue(checkPoint, 'abc', 'executor initially called with no arguments');

var checkPoint = '';
Promise.allSettled.call(function(executor) {
  checkPoint += 'a';
  executor(undefined, undefined);
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}, []);
assert.sameValue(checkPoint, 'abc', 'executor initially called with (undefined, undefined)');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor(undefined, function() {});
    checkPoint += 'b';
    executor(function() {}, function() {});
    checkPoint += 'c';
  }, []);
}, 'executor initially called with (undefined, function)');
assert.sameValue(checkPoint, 'ab', 'executor initially called with (undefined, function)');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor(function() {}, undefined);
    checkPoint += 'b';
    executor(function() {}, function() {});
    checkPoint += 'c';
  }, []);
}, 'executor initially called with (function, undefined)');
assert.sameValue(checkPoint, 'ab', 'executor initially called with (function, undefined)');

var checkPoint = '';
assert.throws(TypeError, function() {
  Promise.allSettled.call(function(executor) {
    checkPoint += 'a';
    executor('invalid value', 123);
    checkPoint += 'b';
    executor(function() {}, function() {});
    checkPoint += 'c';
  }, []);
}, 'executor initially called with (String, Number)');
assert.sameValue(checkPoint, 'ab', 'executor initially called with (String, Number)');
