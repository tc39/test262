// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  Throws a TypeError if the this value is a Symbol.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
features: [error-stack-accessor, Symbol]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

assert.throws(TypeError, function () {
  get.call(Symbol('s'));
});
