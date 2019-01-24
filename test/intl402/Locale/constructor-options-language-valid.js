// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Verify valid language option values (various)
info: |
    Intl.Locale( tag [, options] )
    10. If options is undefined, then
    11. Else
        a. Let options be ? ToObject(options).
    12. Set tag to ? ApplyOptionsToTag(tag, options).

    ApplyOptionsToTag( tag, options )
    ...
    2. If IsStructurallyValidLanguageTag(tag) is false, throw a RangeError exception.

    IsStructurallyValidLanguageTag ( locale )

    The IsStructurallyValidLanguageTag abstract operation verifies that the
    locale argument (which must be a String value)

    represents a well-formed Unicode BCP 47 Locale Identifier" as specified in
    Unicode Technical Standard 35 section 3.2, or successor,

features: [Intl.Locale]
---*/

const validLanguageOptions = [
  [null, 'null'],
  ['zh-cmn', 'cmn'],
  ['ZH-CMN', 'cmn'],
  [{ toString() { return 'de' } }, 'de'],
];
for (const [language, expected] of validLanguageOptions) {
  let expect = expected || 'en';

  assert.sameValue(
    new Intl.Locale('en', {language}).toString(),
    expect,
    `new Intl.Locale('en', {language: "${language}"}).toString() returns "${expect}"`
  );

  expect = (expected || 'en') + '-US';
  assert.sameValue(
    new Intl.Locale('en-US', {language}).toString(),
    expect,
    `new Intl.Locale('en-US', {language: "${language}"}).toString() returns "${expect}"`
  );

  assert.throws(RangeError, () => new Intl.Locale('en-els', {language}).toString());

}

const invalidLanguageOptions = [
    'abcd',
];
for (const language of invalidLanguageOptions) {
  assert.throws(RangeError, () => new Intl.Locale('en', {language}).toString());
  assert.throws(RangeError, () => new Intl.Locale('en-US', {language}).toString());
  assert.throws(RangeError, () => new Intl.Locale('en-els', {language}).toString());
}
