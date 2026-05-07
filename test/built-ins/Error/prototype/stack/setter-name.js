// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  set Error.prototype.stack.name is "set stack".
info: |
  set Error.prototype.stack

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

  Unless otherwise specified, the name property of a built-in function object,
  if it exists, has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [error-stack-accessor]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

verifyProperty(set, 'name', {
  value: 'set stack',
  writable: false,
  enumerable: false,
  configurable: true,
});
