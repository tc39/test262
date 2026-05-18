// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.getCollations
description: >
  Language subtags with more than three letters are supported.
info: |
  CollationsOfLocale ( loc )
  1. If loc.[[Collation]] is not undefined, then
    a. Return CreateArrayFromList(« loc.[[Collation]] »).
  ...
  3. If language is not "und", then
    a. Let r be LookupMatchingLocaleByPrefix(%Intl.Collator%.[[AvailableLocales]], « loc.[[Locale]] »).
    b. If r is not undefined, then
      ...
    c. Else,
      i. Let foundLocale be DefaultLocale().
    d. Let foundLocaleData be %Intl.Collator%.[[SortLocaleData]].[[<foundLocale>]].
  ...
  6. Return CreateArrayFromList(sorted).

features: [Intl.Locale, Intl.Locale-info]
---*/

// "abcdefgh" is not a registered language, so it always returns the default
// locale's collations.
assert.compareArray(
  new Intl.Locale("abcdefgh").getCollations(),
  new Intl.Locale(new Intl.Collator().resolvedOptions().locale).getCollations(),
  `with locale "abcdefgh"`
);

// Except if an explicit "co" Unicode extension subtag is present.
assert.compareArray(
  new Intl.Locale("abcdefgh-u-co-phonebk").getCollations(),
  ["phonebk"],
  `with locale "abcdefgh-u-co-phonebk"`
);
