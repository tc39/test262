// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: Original PDT calendar is preserved with ISO PlainDate
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const cal = {
  id: 'thisisnotiso',
  era() { return "the era"; },
  eraYear() { return 1909; },
  toString() { return "this is a string"; },
  year() { return 2008; },
  month() { return 9; },
  monthCode() { return "M09"; },
  day() { return 6; },
  dateAdd() {},
  dateFromFields() {},
  dateUntil() {},
  dayOfWeek() {},
  dayOfYear() {},
  daysInMonth() {},
  daysInWeek() {},
  daysInYear() {},
  fields() {},
  inLeapYear() {},
  mergeFields() {},
  monthDayFromFields() {},
  monthsInYear() {},
  weekOfYear() {},
  yearMonthFromFields() {},
  yearOfWeek() {},
};
const pdt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30, 0, 0, 0, cal);
const pd = new Temporal.PlainDate(2010, 11, 12);
assert.sameValue(pd.calendarId, "iso8601", "PlainDate with ISO calendar");
const shifted = pdt.withPlainDate(pd);

TemporalHelpers.assertPlainDateTime(
  shifted,
  2008, 9, "M09", 6, 3, 24, 30, 0, 0, 0,
  "calendar is unchanged if input has ISO calendar (1)",
  "the era",
  1909
);

assert.sameValue(
  shifted.getCalendar(),
  cal,
  "calendar is unchanged if input has ISO calendar (2)"
);
