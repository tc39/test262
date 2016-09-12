// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-canonicalizelanguagetag
description: Test for the replacement of a deprecated subtag with its preferred subtag.
info: |
  6.2.3 CanonicalizeLanguageTag ( locale )
   It takes the steps specified in RFC 5646 section 4.5, or successor, to bring the language
   tag into canonical form, and to regularize the case of the subtags.
   RFC 5646 section 4.5 - 3rd point: Subtags are replaced by their
   'Preferred-Value', if there is one.
includes: [compareArray.js]
---*/

var gCL = Intl.getCanonicalLocales;

function assertArray(l, r) {
  assert(compareArray(l, r), r);
}

// islamicc is deprecated and its preferred name is 'islamic-civil'.
// See http://www.unicode.org/repos/cldr/tags/latest/common/bcp47/calendar.xml .
assertArray(gCL(['ar-ma-u-ca-islamicc']), ['ar-MA-u-ca-islamic-civil']);
