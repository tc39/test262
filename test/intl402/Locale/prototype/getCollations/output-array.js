// Copyright 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.getCollations
description: The return value is an Array
info: |
  CollationsOfLocale ( loc )
  ...
  6. Return CreateArrayFromList(_sorted_).
features: [Intl.Locale,Intl.Locale-info]
locale: [ar, de, en, ja, ko, sv, tr, zh]
---*/

for (const tag of ["ar", "de", "en", "ja", "ko", "sv", "tr", "zh"]) {
  assert(
    Array.isArray(new Intl.Locale(tag).getCollations()),
    `getCollations() for ${tag} should return an array`,
  );
}
