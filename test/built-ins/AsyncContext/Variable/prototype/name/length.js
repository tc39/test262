// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.name
description: >
  AsyncContext.Variable.prototype.name.length value and descriptor.
info: |
  get AsyncContext.Variable.prototype.name

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncContext.Variable.prototype, 'name');

assert.sameValue(
  descriptor.get.length, 0,
  'The value of `AsyncContext.Variable.prototype.name.length` is `0`'
);

verifyNotEnumerable(descriptor.get, 'length');
verifyNotWritable(descriptor.get, 'length');
verifyConfigurable(descriptor.get, 'length');
