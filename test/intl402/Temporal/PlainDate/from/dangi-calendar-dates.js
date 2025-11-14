// Copyright 2025 Google Inc, Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.from
description: Test `from` with Dangi calendar
features: [Temporal]
---*/

const calendar = "dangi";

const cases = {
  year2000: {
    year: 1999,
    month: 11,
    monthCode: "M11",
    day: 25
  },
  year1900: {
    year: 1899,
    month: 12,
    monthCode: "M12",
    day: 1
  },
  year2100: {
    year: 2099,
    month: 12,
    monthCode: "M11",
    day: 21
  }
};
const dates = {
  year2000: Temporal.PlainDate.from("2000-01-01"),
  year1900: Temporal.PlainDate.from("1900-01-01"),
  year2100: Temporal.PlainDate.from("2100-01-01")
};
for (var [name, result] of Object.entries(cases)) {
  const date = dates[name];
  const inCal = date.withCalendar(calendar);

  assert.sameValue(inCal.era, result.era, `${name}: era`);
  assert.sameValue(inCal.eraYear, result.eraYear, `${name}: eraYear`);
  assert.sameValue(inCal.year, result.year, `${name}: year`);
  assert.sameValue(inCal.month, result.month, `${name}: month`);
  assert.sameValue(inCal.monthCode, result.monthCode, `${name}: monthCode`);
  assert.sameValue(inCal.day, result.day, `${name}: day`);

  const dateRoundtrip2 = Temporal.PlainDate.from({
    calendar,
    year: result.year,
    day: result.day,
    monthCode: result.monthCode
  });
  assert.sameValue(dateRoundtrip2.toString(), inCal.toString());

  const dateRoundtrip3 = Temporal.PlainDate.from({
    calendar,
    year: result.year,
    day: result.day,
    month: result.month
  });
  assert.sameValue(dateRoundtrip3.toString(), inCal.toString());

  const dateRoundtrip4 = Temporal.PlainDate.from({
    calendar,
    year: result.year,
    day: result.day,
    monthCode: result.monthCode
  });
  assert.sameValue(dateRoundtrip4.toString(), inCal.toString());

  assert.throws(RangeError, () => Temporal.PlainDate.from({
    calendar,
    day: result.day,
    month: result.month === 1 ? 2 : result.month - 1,
    monthCode: result.monthCode,
    year: result.year
  }));
}

