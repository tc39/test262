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
- addIntlExtras
description: |
  pending
esid: pending
---*/
addMozIntlDisplayNames(this);

const tests = {
  "en": {
    long: {
      "am": "AM",
      "pm": "PM",
    },
    short: {},
    narrow: {},
  },
  "de": {
    long: {
      "am": "AM",
      "pm": "PM",
    },
    short: {},
    narrow: {},
  },
  "fr": {
    long: {
      "am": "AM",
      "pm": "PM",
    },
    short: {},
    narrow: {},
  },
  "zh": {
    long: {
      "am": "上午",
      "pm": "下午",
    },
    short: {},
    narrow: {},
  },
};

for (let [locale, localeTests] of Object.entries(tests)) {
  let defaultCalendar = new Intl.DateTimeFormat(locale).resolvedOptions().calendar;

  for (let [style, styleTests] of Object.entries(localeTests)) {
    let dn = new Intl.DisplayNames(locale, {type: "dayPeriod", style});

    let resolved = dn.resolvedOptions();
    assert.sameValue(resolved.locale, locale);
    assert.sameValue(resolved.calendar, defaultCalendar);
    assert.sameValue(resolved.style, style);
    assert.sameValue(resolved.type, "dayPeriod");
    assert.sameValue(resolved.fallback, "code");

    let inheritedTests = {...localeTests.long, ...localeTests.short, ...localeTests.narrow};
    for (let [dayPeriod, expected] of Object.entries({...inheritedTests, ...styleTests})) {
      assert.sameValue(dn.of(dayPeriod), expected);

      // Also works with objects.
      assert.sameValue(dn.of(Object(dayPeriod)), expected);
    }
  }
}

{
  let dn = new Intl.DisplayNames("en", {type: "dayPeriod"});

  // Performs ToString on the input and then validates the stringified result.
  assertThrowsInstanceOf(() => dn.of(), RangeError);
  assertThrowsInstanceOf(() => dn.of(null), RangeError);
  assertThrowsInstanceOf(() => dn.of(Symbol()), TypeError);
  assertThrowsInstanceOf(() => dn.of(0), RangeError);
  assertThrowsInstanceOf(() => dn.of(1), RangeError);

  // Throws an error if not one of ["am", "pm"].
  assertThrowsInstanceOf(() => dn.of(""), RangeError);
  assertThrowsInstanceOf(() => dn.of("AM"), RangeError);
  assertThrowsInstanceOf(() => dn.of("PM"), RangeError);
}

