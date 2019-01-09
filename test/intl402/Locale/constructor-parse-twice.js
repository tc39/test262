// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
  Verifies the handling of options with grandfathered tags.
info: |
  Intl.Locale( tag [, options] )
  12. Set tag to ? ApplyOptionsToTag(tag, options).
  14. Let calendar be ? GetOption(options, "calendar", "string", undefined, undefined).
  16. Set opt.[[ca]] to calendar.
  30. Let r be ! ApplyUnicodeExtensionToTag(tag, opt, relevantExtensionKeys).

  ApplyOptionsToTag( tag, options )
  9. If tag matches neither the privateuse nor the grandfathered production, then
  10. Return CanonicalizeLanguageTag(tag).
features: [Intl.Locale]
---*/

const testData = [
  // Regular grandfathered tags.

  // "no-bok" is a grandfathered, so "NO"/"SE" isn't added. After
  // canonicalization we can append "NO"/"SE" and "u-ca-gregory".
  {
    tag: "no-bok",
    options: {
      region: "NO",
      calendar: "gregory",
    },
    canonical: "nb-NO-u-ca-gregory",
  },

  {
    tag: "no-bok",
    options: {
      region: "SE",
      calendar: "gregory",
    },
    canonical: "nb-SE-u-ca-gregory",
  },

  // "no-bok-NO" isn't a grandfathered tag, so we can replace "NO" with "SE"
  // and can also append "u-ca-gregory".
  {
    tag: "no-bok-NO",
    options: {
      region: "SE",
      calendar: "gregory",
    },
    canonical: "no-bok-SE-u-ca-gregory",
  },

  // "no-bok-SE" isn't a grandfathered tag, so we can replace "SE" with "NO"
  // and can also append "u-ca-gregory".
  {
    tag: "no-bok-SE",
    options: {
      region: "NO",
      calendar: "gregory",
    },
    canonical: "no-bok-NO-u-ca-gregory",
  },
];

for (const {tag, options, canonical} of testData) {
  assert.sameValue(
    new Intl.Locale(tag, options).toString(),
    canonical,
    `new Intl.Locale("${tag}", ${options}).toString() returns "${canonical}"`
  );
}
