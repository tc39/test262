// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype
description: >
  The initial value of AsyncContext.Variable.prototype is the
  AsyncContext.Variable prototype object.
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Variable.prototype.isPrototypeOf(new AsyncContext.Variable()), true,
  'AsyncContext.Variable.prototype.isPrototypeOf(new AsyncContext.Variable()) returns true'
);

verifyNotEnumerable(AsyncContext.Variable, 'prototype');
verifyNotWritable(AsyncContext.Variable, 'prototype');
verifyNotConfigurable(AsyncContext.Variable, 'prototype');
