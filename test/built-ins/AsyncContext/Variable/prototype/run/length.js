// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  AsyncContext.Variable.prototype.run.length value and descriptor.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Variable.prototype.run.length, 2,
  'The value of `AsyncContext.Variable.prototype.run.length` is `2`'
);

verifyNotEnumerable(AsyncContext.Variable.prototype.run, 'length');
verifyNotWritable(AsyncContext.Variable.prototype.run, 'length');
verifyConfigurable(AsyncContext.Variable.prototype.run, 'length');
