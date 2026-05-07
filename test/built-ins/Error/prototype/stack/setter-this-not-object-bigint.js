// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  Throws a TypeError if the this value is a BigInt.
info: |
  set Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
features: [error-stack-accessor, BigInt]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

assert.throws(TypeError, function () {
  set.call(0n, '');
});
