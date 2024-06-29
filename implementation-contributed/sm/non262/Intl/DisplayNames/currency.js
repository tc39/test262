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
      "USD": "US Dollar",
      "EUR": "Euro",
      "FRF": "French Franc",
      "CNY": "Chinese Yuan",
      "XAU": "Gold",
    },
    short: {
      "USD": "$",
      "EUR": "€",
      "FRF": "FRF",
      "CNY": "CN¥",
      "XAU": "XAU",
    },
    narrow: {
      "USD": "USD",
      "EUR": "EUR",
      "CNY": "CNY",
    },
  },
  "de": {
    long: {
      "USD": "US-Dollar",
      "EUR": "Euro",
      "FRF": "Französischer Franc",
      "CNY": "Renminbi Yuan",
      "XAU": "Unze Gold",
    },
    short: {
      "USD": "$",
      "EUR": "€",
      "FRF": "FRF",
      "CNY": "CN¥",
      "XAU": "XAU",
    },
    narrow: {
      "CNY": "¥",
    },
  },
  "fr": {
    long: {
      "USD": "dollar des États-Unis",
      "EUR": "euro",
      "FRF": "franc français",
      "CNY": "yuan renminbi chinois",
      "XAU": "or",
    },
    short: {
      "USD": "$US",
      "EUR": "€",
      "FRF": "F",
      "CNY": "CNY",
      "XAU": "XAU",
    },
    narrow: {
      "USD": "$",
      "CNY": "¥",
    },
  },
  "zh": {
    long: {
      "USD": "美元",
      "EUR": "欧元",
      "FRF": "法国法郎",
      "CNY": "人民币",
      "XAU": "黄金",
    },
    short: {
      "USD": "US$",
      "EUR": "€",
      "FRF": "FRF",
      "CNY": "¥",
      "XAU": "XAU",
    },
    narrow: {
      "USD": "$",
    },
  },
};

for (let [locale, localeTests] of Object.entries(tests)) {
  for (let [style, styleTests] of Object.entries(localeTests)) {
    let dn = new Intl.DisplayNames(locale, {type: "currency", style});

    let resolved = dn.resolvedOptions();
    assert.sameValue(resolved.locale, locale);
    assert.sameValue(resolved.style, style);
    assert.sameValue(resolved.type, "currency");
    assert.sameValue(resolved.fallback, "code");

    let inheritedTests = {...localeTests.long, ...localeTests.short, ...localeTests.narrow};
    for (let [currency, expected] of Object.entries({...inheritedTests, ...styleTests})) {
      assert.sameValue(dn.of(currency), expected);

      // Also works with objects.
      assert.sameValue(dn.of(Object(currency)), expected);
    }
  }
}

{
  let dn = new Intl.DisplayNames("en", {type: "currency"});

  // Performs ToString on the input and then validates the stringified result.
  assertThrowsInstanceOf(() => dn.of(), RangeError);
  assertThrowsInstanceOf(() => dn.of(null), RangeError);
  assertThrowsInstanceOf(() => dn.of(Symbol()), TypeError);
  assertThrowsInstanceOf(() => dn.of(0), RangeError);

  // Throws an error if |code| isn't a well-formed currency code.
  assertThrowsInstanceOf(() => dn.of("us"), RangeError);
  assertThrowsInstanceOf(() => dn.of("euro"), RangeError);
  assertThrowsInstanceOf(() => dn.of("€uro"), RangeError);
}

// Test fallback behaviour.
{
  let dn1 = new Intl.DisplayNames("en", {type: "currency"});
  let dn2 = new Intl.DisplayNames("en", {type: "currency", fallback: "code"});
  let dn3 = new Intl.DisplayNames("en", {type: "currency", fallback: "none"});

  assert.sameValue(dn1.resolvedOptions().fallback, "code");
  assert.sameValue(dn2.resolvedOptions().fallback, "code");
  assert.sameValue(dn3.resolvedOptions().fallback, "none");

  // "AAA" is not a registered currency code.
  assert.sameValue(dn1.of("AAA"), "AAA");
  assert.sameValue(dn2.of("AAA"), "AAA");
  assert.sameValue(dn3.of("AAA"), undefined);

  // The returned fallback is in canonical case.
  assert.sameValue(dn1.of("aaa"), "AAA");
  assert.sameValue(dn2.of("aaa"), "AAA");
  assert.sameValue(dn3.of("aaa"), undefined);
}

// Test when case isn't canonical.
{
  let dn = new Intl.DisplayNames("en", {type: "currency", fallback: "none"});

  assert.sameValue(dn.of("USD"), "US Dollar");
  assert.sameValue(dn.of("usd"), "US Dollar");
}

