// Copyright 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Verify valid language option values (undefined)
info: |
    Intl.Locale( tag [, options] )
    10. If options is undefined, then
    11. Else
        a. Let options be ? ToObject(options).
    12. Set tag to ? ApplyOptionsToTag(tag, options).

    ApplyOptionsToTag( tag, options )
    ...
    9. Set tag to CanonicalizeLanguageTag(tag).

    CanonicalizeLanguageTag( tag )

    The CanonicalizeLanguageTag abstract operation returns the canonical and
    case-regularized form of the locale argument (which must be a String value
    that is a structurally valid Unicode BCP 47 Locale Identifier as verified by
    the IsStructurallyValidLanguageTag abstract operation).

    IsStructurallyValidLanguageTag ( locale )

    The IsStructurallyValidLanguageTag abstract operation verifies that the
    locale argument (which must be a String value)

    represents a well-formed Unicode BCP 47 Locale Identifier" as specified in
    Unicode Technical Standard 35 section 3.2, or successor,

features: [Intl.Locale]
---*/

assert.sameValue(
  new Intl.Locale('en', {language: undefined}).toString(),
  'en',
  `new Intl.Locale('en', {language: undefined}).toString() returns "en"`
);

assert.sameValue(
  new Intl.Locale('en-US', {language: undefined}).toString(),
  'en-US',
  `new Intl.Locale('en-US', {language: undefined}).toString() returns "en-US"`
);

assert.throws(RangeError, () => new Intl.Locale('en-els', {language: undefined}).toString());
