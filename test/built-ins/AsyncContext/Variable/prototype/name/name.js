// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.name
description: >
  AsyncContext.Variable.prototype.name.name value and descriptor.
info: |
  get AsyncContext.Variable.prototype.name

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncContext.Variable.prototype, 'name');

assert.sameValue(descriptor.get.name,
  'get name',
  'The value of `descriptor.get.name` is `get name`'
);

verifyNotEnumerable(descriptor.get, 'name');
verifyNotWritable(descriptor.get, 'name');
verifyConfigurable(descriptor.get, 'name');
