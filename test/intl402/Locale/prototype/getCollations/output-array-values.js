// Copyright 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.collations
description: >
    Checks that the return value of Intl.Locale.prototype.collations is an Array
    that does not contain invalid values.
info: |
  CollationsOfLocale ( loc )
  ...
  3. If language is not "und", then
    a. Let r be LookupMatchingLocaleByPrefix(%Intl.Collator%.[[AvailableLocales]], « loc.[[Locale]] »).
    b. If r is not undefined, then
      i. Let foundLocale be r.[[locale]].
    ...
    d. Let foundLocaleData be %Intl.Collator%.[[SortLocaleData]].[[<foundLocale>]].
  ...
  6. Return CreateArrayFromList(sorted).

  Properties of the Intl.Collator Constructor - Internal slots:
    The values "standard" and "search" must not be used as elements in any
    [[SortLocaleData]].[[<locale>]].[[co]] and
    [[SearchLocaleData]].[[<locale>]].[[co]] List.
features: [Intl.Locale, Intl.Locale-info]
---*/

const output = new Intl.Locale('en').getCollations();
assert(output.length > 0, 'array has at least one element');
assert.sameValue(output.indexOf('standard'), -1, '"standard" collation');
assert.sameValue(output.indexOf('search'), -1, '"sort" collation');
