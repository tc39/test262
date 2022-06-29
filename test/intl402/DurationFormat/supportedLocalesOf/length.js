// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.supportedLocalesOf
description: >
    Checks the "length" property of Intl.DurationFormat.supportedLocalesOf().
includes: [propertyHelper.js]
features: [Intl.DurationFormat]
---*/

assert.sameValue(Intl.DateTimeFormat.prototype.format.length, 1);

verifyProperty(Intl.DurationFormat.supportedLocalesOf, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
