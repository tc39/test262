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
    long: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    short: ["Q1", "Q2", "Q3", "Q4"],
    narrow: ["1", "2", "3", "4"],
  },
  "de": {
    long: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
    short: ["Q1", "Q2", "Q3", "Q4"],
    narrow: ["1", "2", "3", "4"],
  },
  "fr": {
    long: ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
    short: ["T1", "T2", "T3", "T4"],
    narrow: ["1", "2", "3", "4"],
  },
  "zh": {
    long: ["第一季度", "第二季度", "第三季度", "第四季度"],
    short: ["1季度", "2季度", "3季度", "4季度"],
    narrow: ["1", "2", "3", "4"],
  },
};

for (let [locale, localeTests] of Object.entries(tests)) {
  let defaultCalendar = new Intl.DateTimeFormat(locale).resolvedOptions().calendar;

  for (let [style, styleTests] of Object.entries(localeTests)) {
    let dn = new Intl.DisplayNames(locale, {type: "quarter", style});

    let resolved = dn.resolvedOptions();
    assert.sameValue(resolved.locale, locale);
    assert.sameValue(resolved.calendar, defaultCalendar);
    assert.sameValue(resolved.style, style);
    assert.sameValue(resolved.type, "quarter");
    assert.sameValue(resolved.fallback, "code");

    for (let i = 0; i < 4; i++) {
      assert.sameValue(dn.of(i + 1), styleTests[i]);

      // Also works with strings.
      assert.sameValue(dn.of(String(i + 1)), styleTests[i]);

      // Also works with objects.
      assert.sameValue(dn.of(Object(i + 1)), styleTests[i]);
    }
  }
}

{
  let dn = new Intl.DisplayNames("en", {type: "quarter"});

  // Performs ToString on the input and then validates the stringified result.
  assertThrowsInstanceOf(() => dn.of(), RangeError);
  assertThrowsInstanceOf(() => dn.of(null), RangeError);
  assertThrowsInstanceOf(() => dn.of(Symbol()), TypeError);

  // Throws an error if |code| isn't an integer.
  assertThrowsInstanceOf(() => dn.of(1.5), RangeError);
  assertThrowsInstanceOf(() => dn.of(-Infinity), RangeError);
  assertThrowsInstanceOf(() => dn.of(Infinity), RangeError);
  assertThrowsInstanceOf(() => dn.of(NaN), RangeError);

  // Throws an error if outside of [1, 4].
  assertThrowsInstanceOf(() => dn.of(-1), RangeError);
  assertThrowsInstanceOf(() => dn.of(0), RangeError);
  assertThrowsInstanceOf(() => dn.of(5), RangeError);
}

