// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.constructor
description: AsyncContext.Variable.prototype.constructor value and descriptor
info: |
  The initial value of AsyncContext.Variable.prototype.constructor is
  %AsyncContext.Variable%.
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(AsyncContext.Variable.prototype.constructor, AsyncContext.Variable);
assert.sameValue((new AsyncContext.Variable()).constructor, AsyncContext.Variable);

verifyNotEnumerable(AsyncContext.Variable.prototype, 'constructor');
verifyWritable(AsyncContext.Variable.prototype, 'constructor');
verifyConfigurable(AsyncContext.Variable.prototype, 'constructor');
