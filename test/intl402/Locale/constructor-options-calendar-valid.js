// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    Intl.Locale( tag [, options] )

    ...
    14. Let calendar be ? GetOption(options, "calendar", "string", undefined, undefined).
    ...
    30. Let r be ! ApplyUnicodeExtensionToTag(tag, opt, relevantExtensionKeys).
    ...

    ApplyUnicodeExtensionToTag( tag, options, relevantExtensionKeys )

    ...
    8. Let locale be the String value that is tag with all Unicode locale extension sequences removed.
    9. Let newExtension be ! CanonicalizeUnicodeExtension(attributes, keywords).
    10. If newExtension is not the empty String, then
        a. Let locale be ! InsertUnicodeExtension(locale, newExtension).
    ...

    CanonicalizeUnicodeExtension( attributes, keywords )
    ...
    4. Repeat for each element entry of keywords in List order,
        a. Let keyword be entry.[[Key]].
        b. If entry.[[Value]] is not the empty String, then
            i. Let keyword be the string-concatenation of keyword, "-", and entry.[[Value]].
        c. Append keyword to fullKeywords.
    ...
features: [Intl.Locale]
---*/

const validCalendarOptions = [
  ["", "en-u-ca"],
  ["abc", "en-u-ca-abc"],
  ["abcd", "en-u-ca-abcd"],
  ["abcde", "en-u-ca-abcde"],
  ["abcdef", "en-u-ca-abcdef"],
  ["abcdefg", "en-u-ca-abcdefg"],
  ["abcdefgh", "en-u-ca-abcdefgh"],
  ["12345678", "en-u-ca-12345678"],
  ["1234abcd", "en-u-ca-1234abcd"],
  ["1234abcd-abc123", "en-u-ca-1234abcd-abc123"],
];
for (const [calendar, expected] of validCalendarOptions) {
  let options = { calendar };
  assert.sameValue(
    new Intl.Locale('en', options).toString(),
    expected,
    `new Intl.Locale('en', options).toString() equals the value of ${expected}`
  );
  assert.sameValue(
    new Intl.Locale('en-u-ca-gregory', options).toString(),
    expected,
    `new Intl.Locale('en-u-ca-gregory', options).toString() equals the value of ${expected}`
  );
}
