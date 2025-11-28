// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.from
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
  leapYear: Temporal.PlainDate.from("2004-03-21[+00:00][u-ca=indian]"),
  nonLeapYear: Temporal.PlainDate.from("2005-03-22[+00:00][u-ca=indian]")
};
for (var [name, result] of Object.entries(cases)) {
  const dateNoExtraFields = dates[name];
  const date = dateNoExtraFields.with({year: dateNoExtraFields.year});

  TemporalHelpers.assertPlainDate(date, result.year, result.month, result.monthCode, result.day, name, result.era, result.eraYear);

  const dateRoundtrip2 = Temporal.PlainDate.from({
    calendar,
    year: result.year,
    day: result.day,
    monthCode: result.monthCode
  });
  TemporalHelpers.assertPlainDate(dateRoundtrip2, date.year, date.month, date.monthCode, date.day, name, date.era, date.eraYear);

  const dateRoundtrip3 = Temporal.PlainDate.from({
    calendar,
    year: result.year,
    day: result.day,
    month: result.month
  });
  TemporalHelpers.assertPlainDate(dateRoundtrip3, date.year, date.month, date.monthCode, date.day, name, date.era, date.eraYear);

  const dateRoundtrip4 = Temporal.PlainDate.from({
    calendar,
    year: result.year,
    day: result.day,
    monthCode: result.monthCode
  });
  TemporalHelpers.assertPlainDate(dateRoundtrip4, date.year, date.month, date.monthCode, date.day, name, date.era, date.eraYear);

  assert.throws(RangeError, () => Temporal.PlainDate.from({
    calendar,
    day: result.day,
    month: result.month === 1 ? 2 : result.month - 1,
    monthCode: result.monthCode,
    year: result.year
  }));
}

