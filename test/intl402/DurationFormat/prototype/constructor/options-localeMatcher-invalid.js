// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat
description: Checks error cases for the options argument to the DurationFormat constructor when using invalid localeMatcher.
info: |
  Intl.DurationFormat ( [ locales [ , options ] ] )
  (...)
  5. Let matcher be ? GetOption(options, "localeMatcher", "string", « "lookup", "best fit" », "best fit").
features: [Intl.DurationFormat]
---*/

const invalidLocaleMatcherOptions = [
  null,
  1,
  "",
  "001",
  "latn--",
  "Lookup",
  "LOOKUP",
  "lookup\0",
  "Best fit",
  "BEST FIT",
  "best\u00a0fit",
];

for (const localeMatcher of invalidLocaleMatcherOptions) {
  assert.throws(
    RangeError,
    function () {
      new Intl.DurationFormat("en", { localeMatcher });
    },
    `new Intl.DurationFormat("en", { localeMatcher: "${localeMatcher}"}) throws RangeError`
  );
}
