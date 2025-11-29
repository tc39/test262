// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.from
description: >
  Check from with leap years and non-leap years
  (indian calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "indian";

const cases = {
  leapYear: {
    year: 1926,
    month: 1,
    monthCode: "M01",
    day: 1,
    era: 'shaka',
    eraYear: 1926
  },
  nonLeapYear: {
    year: 1927,
    month: 1,
    monthCode: "M01",
    day: 1,
    era: 'shaka',
    eraYear: 1927
  },
};
const dates = {
  leapYear: Temporal.PlainDateTime.from("2004-03-21[+00:00][u-ca=indian]"),
  nonLeapYear: Temporal.PlainDateTime.from("2005-03-22[+00:00][u-ca=indian]")
};
for (var [name, result] of Object.entries(cases)) {
  const date = dates[name];

  TemporalHelpers.assertPlainDateTime(date, result.year, result.month, result.monthCode, result.day,0, 0, 0, 0, 0, 0,  name, result.era, result.eraYear);
}

