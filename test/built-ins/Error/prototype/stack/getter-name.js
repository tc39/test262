// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  get Error.prototype.stack.name is "get stack".
info: |
  get Error.prototype.stack

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

  Unless otherwise specified, the name property of a built-in function object,
  if it exists, has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [error-stack-accessor]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

verifyProperty(get, 'name', {
  value: 'get stack',
  writable: false,
  enumerable: false,
  configurable: true,
});
