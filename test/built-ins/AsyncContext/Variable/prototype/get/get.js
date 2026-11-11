// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
    AsyncContext.Variable.prototype.get ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Variable.prototype.get,
  'function',
  'typeof AsyncContext.Variable.prototype.get is "function"'
);

verifyNotEnumerable(AsyncContext.Variable.prototype, 'get');
verifyWritable(AsyncContext.Variable.prototype, 'get');
verifyConfigurable(AsyncContext.Variable.prototype, 'get');
