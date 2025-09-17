// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.name
description: >
  Property type and descriptor.
info: |
  get AsyncContext.Variable.prototype.name

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncContext.Variable.prototype, 'name');

assert.sameValue(
  typeof descriptor.get,
  'function',
  'typeof descriptor.get is function'
);
assert.sameValue(
  typeof descriptor.set,
  'undefined',
  'typeof descriptor.set is undefined'
);

verifyNotEnumerable(AsyncContext.Variable.prototype, 'name');
verifyConfigurable(AsyncContext.Variable.prototype, 'name');
