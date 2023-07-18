// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
    AsyncContext.Variable.prototype.run ( value, func, ...args )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Variable.prototype.run,
  'function',
  'typeof AsyncContext.Variable.prototype.run is "function"'
);

verifyNotEnumerable(AsyncContext.Variable.prototype, 'run');
verifyWritable(AsyncContext.Variable.prototype, 'run');
verifyConfigurable(AsyncContext.Variable.prototype, 'run');
