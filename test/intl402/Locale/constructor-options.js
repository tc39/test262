// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    Intl.Locale( tag [, options] )
    10. If options is undefined, then
    11. Else
        a. Let options be ? ToObject(options).
    12. Set tag to ? ApplyOptionsToTag(tag, options).
    14. Let calendar be ? GetOption(options, "calendar", "string", undefined, undefined).
    15. If calendar is not undefined, then
        a. If calendar does not match the [(3*8alphanum) *("-" (3*8alphanum))] sequence, throw a RangeError exception.
    16. Set opt.[[ca]] to calendar.

    ApplyOptionsToTag( tag, options )
    2. If IsStructurallyValidLanguageTag(tag) is false, throw a RangeError exception.
    3. Let language be ? GetOption(options, "language", "string", undefined, undefined).
    4. If language is not undefined, then
        a. If language does not match the language production, throw a RangeError exception.
    5. Let script be ? GetOption(options, "script", "string", undefined, undefined).
    6. If script is not undefined, then
        a. If script does not match the script production, throw a RangeError exception.
    7. Let region be ? GetOption(options, "region", "string", undefined, undefined).
    8. If region is not undefined, then
        a. If region does not match the region production, throw a RangeError exception.
    9. If tag matches the langtag production, then
        a. If language is not undefined, then
            i. Set tag to tag with the substring corresponding to the language production replaced by the string language.
        b. If script is not undefined, then
            i. If tag does not contain a script production, then
                1. Set tag to the concatenation of the language production of tag, "-", script, and the rest of tag.
            ii. Else,
                1. Set tag to tag with the substring corresponding to the script production replaced by the string script.
        c. If region is not undefined, then
            i. If tag does not contain a region production, then
                1. Set tag to the concatenation of the language production of tag, the substring corresponding to the "-" script production if present, "-", region, and the rest of tag.
            ii. Else,
                1. Set tag to tag with the substring corresponding to the region production replaced by the string region.
    10. Return CanonicalizeLanguageTag(tag).
includes: [testIntl.js, compareArray.js]
features: [Intl.Locale]
---*/

// Intl.Locale step 11.a.
assert.throws(TypeError, function() { new Intl.Locale("en", null) })


// ApplyOptionsToTag step 2.
for (const invalidTag of getInvalidLanguageTags()) {
  assert.throws(RangeError, function() {
    new Intl.Locale(invalidTag)
  }, "Language tag: " + invalidTag);
}


// ApplyOptionsToTag step 3, 9.a.i.
const validLanguageOptions = [
  [undefined, "en"],
  [null, "null"],
  ["zh-cmn", "cmn"],
  ["ZH-CMN", "cmn"],
  ["abcd", "abcd"],
  ["abcde", "abcde"],
  ["abcdef", "abcdef"],
  ["abcdefg", "abcdefg"],
  ["abcdefgh", "abcdefgh"],
  [{ toString() { return "de" } }, "de"],
];
for (const [option, expected] of validLanguageOptions) {
  assert.sameValue(new Intl.Locale("en", {
    language: option,
  }).toString(), expected);
}


// ApplyOptionsToTag step 4.a.
/*
 language      = 2*3ALPHA            ; shortest ISO 639 code
                 ["-" extlang]       ; sometimes followed by
                                     ; extended language subtags
               / 4ALPHA              ; or reserved for future use
               / 5*8ALPHA            ; or registered language subtag

 extlang       = 3ALPHA              ; selected ISO 639 codes
                 *2("-" 3ALPHA)      ; permanently reserved
*/
const invalidLanguageOptions = [
  "",
  "a",
  "ab7",
  "notalanguage",
  "undefined",

  // Value contains more than just the 'language' production.
  "fr-Latn",
  "fr-FR",
  "sa-vaidika",
  "fr-a-asdf",
  "fr-x-private",

  // Irregular grandfathered language tag.
  "i-klingon",

  // Regular grandfathered language tag.
  "zh-Hant",

  // Reserved with extended language subtag
  "abcd-US",
  "abcde-US",
  "abcdef-US",
  "abcdefg-US",
  "abcdefgh-US",

  7,
];
for (const invalidLanguageOption of invalidLanguageOptions) {
  assert.throws(RangeError, () => new Intl.Locale("en", {language: invalidLanguageOption}));
}


// ApplyOptionsToTag step 5, 9.b.
const validScriptOptions = [
  [null, "en-Null"],
  ["bali", "en-Bali"],
  ["Bali", "en-Bali"],
  ["bALI", "en-BALI"], // TODO REVIEW: is this the correct case regularization?
  [{ toString() { return "Brai" } }, "en-Brai"],
];
for (const [option, expected] of validScriptOptions) {
  assert.sameValue(new Intl.Locale("en", {
    script: option,
  }).toString(), expected);
  assert.sameValue(new Intl.Locale("en-Cyrl", {
    script: option,
  }).toString(), expected);
}


// ApplyOptionsToTag step 6.a.
/*
 script        = 4ALPHA              ; ISO 15924 code
*/
const invalidScriptOptions = [
  "",
  "a",
  "ab",
  "abc",
  "abc7",
  "notascript",
  "undefined",
  "Bal\u0130",
  "Bal\u0131",

  // Value contains more than just the 'script' production.
  "ary-Arab",
  "Latn-SA",
  "Latn-vaidika",
  "Latn-a-asdf",
  "Latn-x-private",

  7,
];
for (const invalidScriptOption of invalidScriptOptions) {
  assert.throws(RangeError, () => new Intl.Locale("en", {script: invalidScriptOption}));
}


// ApplyOptionsToTag step 7, 9.c.
const validRegionOptions = [
  ["FR", "en-FR"],
  ["554", "en-554"],
  [554, "en-554"],
];
for (const [option, expected] of validRegionOptions) {
  assert.sameValue(new Intl.Locale("en", {
    region: option,
  }).toString(), expected);
  assert.sameValue(new Intl.Locale("en-US", {
    region: option,
  }).toString(), expected);
}


// ApplyOptionsToTag step 8.a.
/*
 region        = 2ALPHA              ; ISO 3166-1 code
               / 3DIGIT              ; UN M.49 code
*/
const invalidRegionOptions = [
  "",
  "a",
  "abc",
  "a7",

  // Value cannot be parsed as a 'region' production.
  "notaregion",

  // Value contains more than just the 'region' production.
  "SA-vaidika",
  "SA-a-asdf",
  "SA-x-private",

  // Value contains more than just the 'script' production.
  "ary-Arab",
  "Latn-SA",
  "Latn-vaidika",
  "Latn-a-asdf",
  "Latn-x-private",

  7,
];
for (const invalidRegionOption of invalidRegionOptions) {
  assert.throws(RangeError, () => new Intl.Locale("en", {region: invalidRegionOption}));
}


// Intl.Locale step 14.
const validCalendarOptions = [
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
for (const [option, expected] of validCalendarOptions) {
  assert.sameValue(new Intl.Locale("en", {
    calendar: option,
  }).toString(), expected);
  assert.sameValue(new Intl.Locale("en-u-ca-gregory", {
    calendar: option,
  }).toString(), expected);
}


// Intl.Locale step 15.
/*
 alphanum      = (ALPHA / DIGIT)     ; letters and numbers
 calendar = (3*8alphanum) *("-" (3*8alphanum))
*/
const invalidCalendarOptions = [
  "",
  "a",
  "ab",
  "abcdefghi",
  "abc-abcdefghi",
];
for (const invalidCalendarOption of invalidCalendarOptions) {
  assert.throws(RangeError, () => new Intl.Locale("en", {calendar: invalidCalendarOption}));
}
