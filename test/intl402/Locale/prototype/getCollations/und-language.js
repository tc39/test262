// Copyright 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.getCollations
description: Return value for language "und" is hardcoded in spec
info: |
  CollationsOfLocale ( loc )

  2. Let _language_ be GetLocaleLanguage(_loc_.[[Locale]]).
  3. If _language_ is not *"und"*, then
    ...
  4. Else,
    a. Let _list_ be « *"emoji"*, *"eor"* ».
features: [Intl.Locale,Intl.Locale-info]
---*/

const undLocales = [
  "und",
  "und-US",
  "und-Latn",
  "und-Latn-US",
  "und-u-ca-gregory",
  "und-US-u-nu-latn",
];

for (const tag of undLocales) {
  const locale = new Intl.Locale(tag);
  assert.sameValue(
    locale.language,
    "und",
    `"${tag}" has language subtag "und"`
  );
  assert.compareArray(
    locale.getCollations(),
    ["emoji", "eor"],
    `getCollations() for "${tag}" returns the root collations`
  );
}
