// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: AsyncContext.Variable.name value and descriptor
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(AsyncContext.Variable.name, 'Variable', 'The value of AsyncContext.Variable.name is "Variable"');

verifyNotEnumerable(AsyncContext.Variable, 'name');
verifyNotWritable(AsyncContext.Variable, 'name');
verifyConfigurable(AsyncContext.Variable, 'name');
