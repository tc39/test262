// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.getCollations
description: >
  Returns the list « "emoji", "eor" » when the language is "und".
info: |
  CollationsOfLocale ( loc )
  ...
  2. Let language be GetLocaleLanguage(loc.[[Locale]]).
  3. If language is not "und", then
    ...
  4. Else,
     a. Let list be « "emoji", "eor" ».
  ...
features: [Intl.Locale, Intl.Locale-info]
---*/

const locales = [
  // Undetermined language, also with unknown script and region.
  "und",
  "und-Zzzz",
  "und-ZZ",
  "und-Zzzz-ZZ",

  // Undetermined language, but with a known script.
  "und-Latn",
  "und-Arab",
  "und-Thai",

  // Undetermined language, but with a known region.
  "und-US",
  "und-DE",
  "und-SA",
  "und-CN",
];

for (let locale of locales) {
  let collations = new Intl.Locale(locale).getCollations();

  assert.compareArray(collations, ["emoji", "eor"], `with locale "${locale}"`);
}
