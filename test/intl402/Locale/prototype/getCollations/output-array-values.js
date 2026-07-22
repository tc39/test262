// Copyright 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.collations
description: The return value does not contain invalid values
info: |
  10.2.3 Internal Slots
  - The values *"standard"* and *"search"* must not be used as elements in any
    [[SortLocaleData]].[[<locale>]].[[co]] and
    [[SearchLocaleData]].[[<locale>]].[[co]] List.
features: [Intl.Locale, Intl.Locale-info, Array.prototype.includes]
locale: [ar, de, en, ja, ko, sv, tr, zh]
---*/

for (const tag of ["ar", "de", "en", "ja", "ko", "sv", "tr", "zh"]) {
  const output = new Intl.Locale(tag).getCollations();
  assert.notSameValue(output.length, 0, `getCollations() for ${tag} has at least one element`);
  assert(!output.includes("standard"), `getCollations() for ${tag} should not contain 'standard'`);
  assert(!output.includes("search"), `getCollations() for ${tag} should not contain 'search'`);
}
