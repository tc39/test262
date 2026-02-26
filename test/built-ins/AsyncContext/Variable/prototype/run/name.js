// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  AsyncContext.Variable.prototype.run.name value and descriptor.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Variable.prototype.run.name, 'run',
  'The value of `AsyncContext.Variable.prototype.run.name` is `"run"`'
);

verifyNotEnumerable(AsyncContext.Variable.prototype.run, 'name');
verifyNotWritable(AsyncContext.Variable.prototype.run, 'name');
verifyConfigurable(AsyncContext.Variable.prototype.run, 'name');
