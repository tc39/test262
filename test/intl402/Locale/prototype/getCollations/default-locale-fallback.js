// Copyright 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.getCollations
description: Fallback to default locale when locale is not available
info: |
  CollationsOfLocale ( loc )

  2. Let _language_ be GetLocaleLanguage(_loc_.[[Locale]]).
  3. If _language_ is not *"und"*, then
    a. Let _match_ be LookupMatchingLocaleByPrefix(
       %Intl.Collator%.[[AvailableLocales]], « _loc_.[[Locale]] »).
    b. If _match_ is not *undefined*, let _foundLocale_ be _match_.[[locale]];
       else let _foundLocale_ be DefaultLocale().
features: [Intl.Locale,Intl.Locale-info]
---*/

// Unreserved private-use language subtags (qfz..qtz) are guaranteed to have no
// semantics in any CLDR release, so we assume they will fall back to the
// default locale's collations.
// https://www.unicode.org/reports/tr35/tr35.html#Private_Use_Codes
const fallback = new Intl.Locale("qfz").getCollations();

// Verify invariants of the returned list. We cannot assume the contents of the
// list, since the default locale is influenced by out-of-band factors.
assert.notSameValue(fallback.length, 0, "default-locale collations should not be empty");
assert.compareArray(fallback, fallback.toSorted(), "default-locale collations should be sorted");
assert(!fallback.includes("standard"), "default-locale collations should not include 'standard'");
assert(!fallback.includes("search"), "default-locale collations should not include 'search'");

// Try a private-use language with a region that corresponds to a locale with
// non-root collations
for (const language of ["qga-DE", "qgb-ES", "qgc-KR", "qtz-CN"]) {
  assert.compareArray(
    new Intl.Locale(language).getCollations(),
    fallback,
    `getCollations() for unavailable language "${language}" equals the default-locale collations`,
  );
}
