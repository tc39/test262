// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.now.plaindatetime
description: The "plainDateTime" property of Temporal.now
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.now, 'plainDateTime', {
  enumerable: false,
  writable: true,
  configurable: true
});
