// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DisplayNames-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
const tests = {
  "en": {
    long: {
      "de": "German",
      "de-AT": "German (Austria)",
      "de-1996": "German (German orthography of 1996)",
      "en": "English",
      "en-Hant-GB": "English (Traditional, United Kingdom)",
      "en-Hans-US": "English (Simplified, United States)",
      "fr": "French",
      "nl-BE": "Dutch (Belgium)",
      "cr-Cans": "Cree (Unified Canadian Aboriginal Syllabics)",
    },
    short: {
      "en-Hant-GB": "English (Traditional, UK)",
      "en-Hans-US": "English (Simplified, US)",
      "cr-Cans": "Cree (UCAS)",
    },
    narrow: {},
  },
  "de": {
    long: {
      "de": "Deutsch",
      "de-AT": "Deutsch (Österreich)",
      "de-1996": "Deutsch (Neue deutsche Rechtschreibung)",
      "en": "Englisch",
      "en-Hant-GB": "Englisch (Traditionell, Vereinigtes Königreich)",
      "en-Hans-US": "Englisch (Vereinfacht, Vereinigte Staaten)",
      "fr": "Französisch",
      "nl-BE": "Niederländisch (Belgien)",
    },
    short: {
      "en-Hant-GB": "Englisch (Traditionell, UK)",
      "en-Hans-US": "Englisch (Vereinfacht, USA)",
    },
    narrow: {},
  },
  "fr": {
    long: {
      "de": "allemand",
      "de-AT": "allemand (Autriche)",
      "de-1996": "allemand (orthographe allemande de 1996)",
      "en": "anglais",
      "en-Hant-GB": "anglais (traditionnel, Royaume-Uni)",
      "en-Hans-US": "anglais (simplifié, États-Unis)",
      "fr": "français",
      "nl-BE": "néerlandais (Belgique)",
    },
    short: {
      "en-Hant-GB": "anglais (traditionnel, R.-U.)",
      "en-Hans-US": "anglais (simplifié, É.-U.)",
    },
    narrow: {},
  },
  "zh": {
    long: {
      "zh": "中文",
      "zh-Hant": "中文（繁体）",
      "zh-Hant-CN": "中文（繁体，中国）",
      "zh-Hans-HK": "中文（简体，中国香港特别行政区）",
    },
    short: {
      "zh-Hans-HK": "中文（简体，香港）"
    },
    narrow: {},
  },
  "ar": {
    long: {
      "ar": "العربية",
      "ar-SA": "العربية (المملكة العربية السعودية)",
      "zh-MO": "الصينية (منطقة ماكاو الإدارية الخاصة)",
    },
    short: {
      "zh-MO": "الصينية (مكاو)",
    },
    narrow: {},
  },
};

for (let [locale, localeTests] of Object.entries(tests)) {
  for (let [style, styleTests] of Object.entries(localeTests)) {
    let dn = new Intl.DisplayNames(locale, {type: "language", languageDisplay: "standard", style});

    let resolved = dn.resolvedOptions();
    assert.sameValue(resolved.locale, locale);
    assert.sameValue(resolved.style, style);
    assert.sameValue(resolved.type, "language");
    assert.sameValue(resolved.languageDisplay, "standard");
    assert.sameValue(resolved.fallback, "code");

    let inheritedTests = {...localeTests.long, ...localeTests.short, ...localeTests.narrow};
    for (let [language, expected] of Object.entries({...inheritedTests, ...styleTests})) {
      assert.sameValue(dn.of(language), expected);

      // Also works with objects.
      assert.sameValue(dn.of(Object(language)), expected);
    }
  }
}

{
  let dn = new Intl.DisplayNames("en", {type: "language"});

  // Performs ToString on the input and then validates the stringified result.
  assertThrowsInstanceOf(() => dn.of(), RangeError);
  assertThrowsInstanceOf(() => dn.of(null), RangeError);
  assertThrowsInstanceOf(() => dn.of(Symbol()), TypeError);
  assertThrowsInstanceOf(() => dn.of(0), RangeError);

  // Throws an error if |code| can't be parsed as a `unicode_language_id` production.
  assertThrowsInstanceOf(() => dn.of("en-"), RangeError);
  assertThrowsInstanceOf(() => dn.of("en-u-ca-gregory"), RangeError);
  assertThrowsInstanceOf(() => dn.of("en-x-private"), RangeError);
}

// Test fallback behaviour.
{
  let dn1 = new Intl.DisplayNames("en", {type: "language"});
  let dn2 = new Intl.DisplayNames("en", {type: "language", fallback: "code"});
  let dn3 = new Intl.DisplayNames("en", {type: "language", fallback: "none"});

  assert.sameValue(dn1.resolvedOptions().fallback, "code");
  assert.sameValue(dn2.resolvedOptions().fallback, "code");
  assert.sameValue(dn3.resolvedOptions().fallback, "none");

  // "aaa" is not a registered language code.
  assert.sameValue(dn1.of("aaa"), "aaa");
  assert.sameValue(dn2.of("aaa"), "aaa");
  assert.sameValue(dn3.of("aaa"), undefined);

  // "aaa" is not a registered language code.
  assert.sameValue(dn1.of("aaa-Latn"), "aaa-Latn");
  assert.sameValue(dn2.of("aaa-Latn"), "aaa-Latn");
  assert.sameValue(dn3.of("aaa-Latn"), undefined);

  // "Aaaa" is not a registered script code.
  assert.sameValue(dn1.of("en-Aaaa"), "en-Aaaa");
  assert.sameValue(dn2.of("en-Aaaa"), "en-Aaaa");
  assert.sameValue(dn3.of("en-Aaaa"), undefined);

  // "AA" is not a registered region code.
  assert.sameValue(dn1.of("en-AA"), "en-AA");
  assert.sameValue(dn2.of("en-AA"), "en-AA");
  assert.sameValue(dn3.of("en-AA"), undefined);

  // "XZ" doesn't have any localised names.
  assert.sameValue(dn1.of("en-XZ"), "en-XZ");
  assert.sameValue(dn2.of("en-XZ"), "en-XZ");
  assert.sameValue(dn3.of("en-XZ"), undefined);

  // "998" is canonicalised to "XZ".
  assert.sameValue(dn1.of("en-998"), "en-XZ");
  assert.sameValue(dn2.of("en-998"), "en-XZ");
  assert.sameValue(dn3.of("en-998"), undefined);

  // The returned fallback is in canonical case.
  assert.sameValue(dn1.of("AAA"), "aaa");
  assert.sameValue(dn2.of("AAA"), "aaa");
  assert.sameValue(dn3.of("AAA"), undefined);

  assert.sameValue(dn1.of("En-aaaa"), "en-Aaaa");
  assert.sameValue(dn2.of("En-aaaa"), "en-Aaaa");
  assert.sameValue(dn3.of("En-aaaa"), undefined);

  assert.sameValue(dn1.of("EN-aa"), "en-AA");
  assert.sameValue(dn2.of("EN-aa"), "en-AA");
  assert.sameValue(dn3.of("EN-aa"), undefined);
}

// Ensure language tag canonicalisation is performed.
{
  let dn = new Intl.DisplayNames("en", {type: "language", fallback: "none"});

  assert.sameValue(dn.of("ru-RU"), "Russian (Russia)");

  // ICU's canonicalisation supports "SU" -> "RU".
  assert.sameValue(Intl.getCanonicalLocales("ru-SU")[0], "ru-RU");
  assert.sameValue(dn.of("ru-SU"), "Russian (Russia)");

  // ICU's canonicalisation doesn't support "172" -> "RU".
  assert.sameValue(Intl.getCanonicalLocales("ru-172")[0], "ru-RU");
  assert.sameValue(dn.of("ru-172"), "Russian (Russia)");
}

// Test when case isn't canonical.
{
  let dn = new Intl.DisplayNames("en", {type: "language", fallback: "none"});

  assert.sameValue(dn.of("IT-LATN-IT"), "Italian (Latin, Italy)");
  assert.sameValue(dn.of("it-latn-it"), "Italian (Latin, Italy)");
}

// resolvedOptions() only outputs "languageDisplay" when the type is "language".
{
  let dn1 = new Intl.DisplayNames("en", {type: "language"});
  let dn2 = new Intl.DisplayNames("en", {type: "script"});

  assert.sameValue(dn1.resolvedOptions().languageDisplay, "dialect");
  assert.sameValue(dn2.resolvedOptions().hasOwnProperty("languageDisplay"), false);
}

