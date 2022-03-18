// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: Switching to a non-ISO calendar is acceptable
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);
const cal = {
  id: 'thisisnotiso',
  era() { return "the era"; },
  eraYear() { return 1909; },
  toString() { return "this is a string"; },
  year() { return 2008; },
  month() { return 9; },
  monthCode() { return "M09"; },
  day() { return 6; }
};
const shifted = dt.withCalendar(cal).withPlainDate("2008-09-06");

TemporalHelpers.assertPlainDateTime(
  shifted,
  2008, 9, "M09", 6, 3, 24, 30, 0, 0, 0,
  "result contains a non-ISO calendar if present in the input (1)",
  "the era",
  1909
);

assert.notSameValue(
  shifted.calendar.toString(),
  "iso8601",
  "result contains a non-ISO calendar if present in the input (2)"
);
