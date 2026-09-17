// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot
description: AsyncContext.Snapshot.length property descriptor
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

verifyProperty(AsyncContext.Snapshot, 'length', {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
