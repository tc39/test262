// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.supportedLocalesOf
description: Checks the "supportedLocalesOf" property of the DurationFormat prototype object.
info: Intl.DurationFormat.supportedLocalesOf ( locales [, options ])
includes: [propertyHelper.js]
features: [Intl.DurationFormat]
---*/

assert.sameValue(
  typeof Intl.DurationFormat.supportedLocalesOf,
  "function",
  "typeof Intl.DurationFormat.supportedLocalesOf is function"
);

verifyProperty(Intl.DurationFormat, "supportedLocalesOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});

