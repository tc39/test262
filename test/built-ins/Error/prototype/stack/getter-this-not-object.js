// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  Throws a TypeError if the this value is not an Object.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
features: [error-stack-accessor]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

assert.sameValue(typeof get, 'function');

assert.throws(TypeError, function () {
  get.call(undefined);
}, 'undefined');

assert.throws(TypeError, function () {
  get.call(null);
}, 'null');

assert.throws(TypeError, function () {
  get.call(true);
}, 'true');

assert.throws(TypeError, function () {
  get.call(false);
}, 'false');

assert.throws(TypeError, function () {
  get.call(1);
}, 'number');

assert.throws(TypeError, function () {
  get.call('');
}, 'string');
