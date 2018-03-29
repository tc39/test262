// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat.prototype.formatToParts
description: Verifies the branding check for the "formatToParts" function of the RelativeTimeFormat prototype object.
info: |
    Intl.RelativeTimeFormat.prototype.formatToParts( value, unit )

    2. If Type(relativeTimeFormat) is not Object or relativeTimeFormat does not have an [[InitializedRelativeTimeFormat]] internal slot whose value is true, throw a TypeError exception.
features: [Intl.RelativeTimeFormat]
---*/

const fn = Intl.RelativeTimeFormat.prototype.formatToParts;
const invalidValues = [
  undefined,
  null,
  true,
  "",
  Symbol(),
  1,
  {},
  Intl.RelativeTimeFormat,
  Intl.RelativeTimeFormat.prototype,
];

for (const invalidValue of invalidValues) {
  assert.throws(TypeError, () => fn.call(invalidValue));
}
