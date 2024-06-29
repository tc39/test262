// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DateTimeFormat-shell.js
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
const {
  DayPeriod, Hour, Minute, Second, FractionalSecond, Literal
} = DateTimeFormatParts

const tests = [
  // https://unicode-org.atlassian.net/browse/CLDR-13184
  // https://unicode-org.atlassian.net/browse/CLDR-13623
  {
    locale: "en",
    date: new Date("2020-01-01T00:00:00.123"),
    options: {hour: "numeric", fractionalSecondDigits: 3},
    parts: [
      Hour("12"),
      Literal(" "),
      DayPeriod("AM"),
      Literal(" (Fractional Second: "),
      FractionalSecond("123"),
      Literal(")")
    ]
  },

  // https://unicode-org.atlassian.net/browse/ICU-20992
  {
    locale: "ckb-IR",
    date: new Date("2020-01-01T00:00:00.123"),
    options: {minute: "2-digit", fractionalSecondDigits: 3},
    parts: [
      Minute("٠٠"),
      Literal(":"),
      Second("٠٠"),
      Literal("٫"),
      FractionalSecond("١٢٣"),
    ]
  },

  // https://unicode-org.atlassian.net/browse/ICU-20992
  {
    locale: "ckb-IR",
    date: new Date("2020-01-01T00:00:00.123"),
    options: {dayPeriod: "short", fractionalSecondDigits: 3},
    parts: [
      FractionalSecond("١٢٣"),
      Literal(" (Dayperiod: "),
      DayPeriod("ب.ن"),
      Literal(")")
    ]
  },
];

for (let {locale, date, options, parts} of tests) {
  let dtf = new Intl.DateTimeFormat(locale, options);
  assertParts(dtf, date, parts);
}

