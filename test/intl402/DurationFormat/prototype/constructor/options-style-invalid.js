// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.DurationFormat
description: >
    Checks error cases for the options argument to the DurationFormat constructor when using invalid numberingSystem.
info: |
   Intl.DurationFormat ( [ locales [ , options ] ] )
   (...)
   13. Let style be ? GetOption(options, "style", "string", « "long", "short", "narrow", "digital" », "long").
features: [Intl.DurationFormat]
---*/

const invalidStyleOptions = [
  null,
  1,
  "",
  "Long",
  "LONG",
  "long\0",
  "Short",
  "SHORT",
  "short\0",
  "Narrow",
  "NARROW",
  "narrow\0",
  "Digital",
  "DIGITAL",
  "digital\0",
];

for (const style of invalidStyleOptions) {
  assert.throws(RangeError, function() {
    new Intl.DurationFormat("en", {style});
  }, `new Intl.DurationFormat("en", { style : "${style}"}) throws RangeError`);
}




