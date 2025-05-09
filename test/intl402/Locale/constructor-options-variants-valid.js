// Copyright 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    Intl.Locale( tag [, options] )
    12. Set _tag_ to ? UpdateLanguageId(_tag_, _options_).

    UpdateLanguageId ( tag, options )
    8. Let _variants_ be ? GetOption(_options_, *"variants"*, ~string~, ~empty~, GetLocaleVariants(_baseName_)).
    ...
    13. If _variants_ is not *undefined*, set _newTag_ to the string-concatenation of _newTag_, *"-"*, and _variants_.

features: [Intl.Locale]
---*/

const validVariantsOptions = [
  ['en', undefined, undefined],
  ['en', 'spanglis', 'en-spanglis'],
];
for (const [lang, variants, expected] of validVariantsOptions) {
  let options = { variants };
  let expect;

  assert.sameValue(
    new Intl.Locale(lang, options).toString(),
    expected || lang,
    `new Intl.Locale("${lang}", {variants: "${variants}"}).toString() returns "${expect}"`
  );

  assert.sameValue(
    new Intl.Locale(lang + '-fonipa', options).toString(),
    expected || (lang + '-fonipa'),
    `new Intl.Locale("${lang}-fonipa", {variants: "${variants}"}).toString() returns "${expect}"`
  );

  assert.sameValue(
    new Intl.Locale(lang + '-u-ca-gregory', options).toString(),
    (expected || lang) + '-u-ca-gregory',
    `new Intl.Locale("${lang}-u-ca-gregory", {variants: "${variants}"}).toString() returns "${expect}"`
  );

  assert.sameValue(
    new Intl.Locale(lang + '-fonipa-u-ca-gregory', options).toString(),
    (expected || (lang + '-fonipa')) + '-u-ca-gregory',
    `new Intl.Locale("${lang}-fonipa-u-ca-gregory", {variants: "${variants}"}).toString() returns "${expect}"`
  );
}
