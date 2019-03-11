// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Tests the getCanonicalLocales function for weird tags.
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
---*/

var weirdCases =
  [
   {locale: "x-u-foo", canonical: "und-x-u-foo"},
   {locale: "en-x-u-foo"},
   {locale: "en-a-bar-x-u-foo"},
   {locale: "en-x-u-foo-a-bar"},
   {locale: "en-a-bar-u-baz-x-u-foo"},
  ];

weirdCases.forEach(function ({locale, canonical = locale}) {
  assert(compareArray(Intl.getCanonicalLocales(locale), [canonical]));
});
