// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
  AsyncContext.Variable.prototype.get.name value and descriptor.
info: |
  AsyncContext.Variable.prototype.get ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Variable.prototype.get.name, 'get',
  'The value of `AsyncContext.Variable.prototype.get.name` is `"get"`'
);

verifyNotEnumerable(AsyncContext.Variable.prototype.get, 'name');
verifyNotWritable(AsyncContext.Variable.prototype.get, 'name');
verifyConfigurable(AsyncContext.Variable.prototype.get, 'name');
