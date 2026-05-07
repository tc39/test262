// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  Throws a TypeError if the this value is not an Object.
info: |
  set Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
features: [error-stack-accessor]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

assert.sameValue(typeof set, 'function');

assert.throws(TypeError, function () {
  set.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function () {
  set.call(null, '');
}, 'null');

assert.throws(TypeError, function () {
  set.call(true, '');
}, 'true');

assert.throws(TypeError, function () {
  set.call(false, '');
}, 'false');

assert.throws(TypeError, function () {
  set.call(1, '');
}, 'number');

assert.throws(TypeError, function () {
  set.call('s', '');
}, 'string');

// A non-Object this combined with a non-String v throws TypeError. The spec
// runs step 2 (this not Object) before step 3 (v not String), but both steps
// throw TypeError, so the failure is observably the same either way.
assert.throws(TypeError, function () {
  set.call(undefined, 0);
}, 'undefined this with non-String v');

assert.throws(TypeError, function () {
  set.call(null, {});
}, 'null this with non-String v');
