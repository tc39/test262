// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype
description: AsyncContext.Variable.prototype property attributes.
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

verifyNotEnumerable(AsyncContext.Variable, 'prototype');
verifyNotWritable(AsyncContext.Variable, 'prototype');
verifyNotConfigurable(AsyncContext.Variable, 'prototype');
