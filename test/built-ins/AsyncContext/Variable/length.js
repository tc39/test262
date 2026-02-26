// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: AsyncContext.Variable.length property descriptor
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

verifyProperty(AsyncContext.Variable, 'length', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
