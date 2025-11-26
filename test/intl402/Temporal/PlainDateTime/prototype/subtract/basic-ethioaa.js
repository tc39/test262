// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: Basic addition and subtraction in the ethioaa calendar
features: [Temporal, Intl.Era-monthcode]
includes: [temporalHelpers.js]
---*/

const calendar = "ethioaa";
const options = { overflow: "reject" };

// Years

const years1 = new Temporal.Duration(-1);
const years1n = new Temporal.Duration(1);
const years5 = new Temporal.Duration(-5);
const years5n = new Temporal.Duration(5);

const date720302 = Temporal.PlainDateTime.from({ year: 7203, monthCode: "M02", day: 1, hour: 12, minute: 34, calendar }, options);
const date720802 = Temporal.PlainDateTime.from({ year: 7208, monthCode: "M02", day: 29, hour: 12, minute: 34, calendar }, options);

TemporalHelpers.assertPlainDateTime(
  date720302.subtract(years1),
  7204, 2, "M02", 1, 12, 34, 0, 0, 0, 0, "Adding 1 year to day 1 of a month", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720802.subtract(years1),
  7209, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "Adding 1 year to day 29 of a month", "aa", 7209
);

TemporalHelpers.assertPlainDateTime(
  date720302.subtract(years5),
  7208, 2, "M02", 1, 12, 34, 0, 0, 0, 0, "Adding 5 years to day 1 of a month", "aa", 7208
);

TemporalHelpers.assertPlainDateTime(
  date720802.subtract(years5),
  7213, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "Adding 5 years to day 29 of a month", "aa", 7213
);

TemporalHelpers.assertPlainDateTime(
  date720302.subtract(years1n),
  7202, 2, "M02", 1, 12, 34, 0, 0, 0, 0, "Subtracting 1 year from day 1 of a month", "aa", 7202
);

TemporalHelpers.assertPlainDateTime(
  date720802.subtract(years1n),
  7207, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "Subtracting 1 year from day 29 of a month", "aa", 7207
);

TemporalHelpers.assertPlainDateTime(
  date720302.subtract(years5n),
  7198, 2, "M02", 1, 12, 34, 0, 0, 0, 0, "Subtracting 5 years from day 1 of a month", "aa", 7198
);

TemporalHelpers.assertPlainDateTime(
  date720802.subtract(years5n),
  7203, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "Subtracting 5 years from day 29 of a month", "aa", 7203
);

// Months

const months1 = new Temporal.Duration(0, -1);
const months1n = new Temporal.Duration(0, 1);
const months4 = new Temporal.Duration(0, -4);
const months4n = new Temporal.Duration(0, 4);

const date720401 = Temporal.PlainDateTime.from({ year: 7204, monthCode: "M01", day: 1, hour: 12, minute: 34, calendar }, options);
const date720406 = Temporal.PlainDateTime.from({ year: 7204, monthCode: "M06", day: 1, hour: 12, minute: 34, calendar }, options);
const date720411 = Temporal.PlainDateTime.from({ year: 7204, monthCode: "M11", day: 1, hour: 12, minute: 34, calendar }, options);
const date720313 = Temporal.PlainDateTime.from({ year: 7203, monthCode: "M13", day: 1, hour: 12, minute: 34, calendar }, options);

TemporalHelpers.assertPlainDateTime(
  date720411.subtract(months1),
  7204, 12, "M12", 1, 12, 34, 0, 0, 0, 0, "Adding 1 month, with result in same year", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720313.subtract(months1),
  7204, 1, "M01", 1, 12, 34, 0, 0, 0, 0, "Adding 1 month, with result in next year", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720406.subtract(months4),
  7204, 10, "M10", 1, 12, 34, 0, 0, 0, 0, "Adding 4 months, with result in same year", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720313.subtract(months4),
  7204, 4, "M04", 1, 12, 34, 0, 0, 0, 0, "Adding 4 months, with result in next year", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720411.subtract(months1n),
  7204, 10, "M10", 1, 12, 34, 0, 0, 0, 0, "Subtracting 1 month, with result in same year", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720401.subtract(months1n),
  7203, 13, "M13", 1, 12, 34, 0, 0, 0, 0, "Subtracting 1 month, with result in previous year", "aa", 7203
);

TemporalHelpers.assertPlainDateTime(
  date720406.subtract(months4n),
  7204, 2, "M02", 1, 12, 34, 0, 0, 0, 0, "Subtracting 4 months, with result in same year", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720401.subtract(months4n),
  7203, 10, "M10", 1, 12, 34, 0, 0, 0, 0, "Subtracting 4 months, with result in previous year", "aa", 7203
);

// Weeks

const months2weeks3 = new Temporal.Duration(0, /* months = */ -2, /* weeks = */ -3);
const months2weeks3n = new Temporal.Duration(0, 2, 3);

const date720601 = Temporal.PlainDateTime.from({ year: 7206, monthCode: "M01", day: 1, hour: 12, minute: 34, calendar }, options);

TemporalHelpers.assertPlainDateTime(
  date720601.subtract(months2weeks3),
  7206, 3, "M03", 22, 12, 34, 0, 0, 0, 0, "add 2 months 3 weeks from non-leap day/month, ending in same year", "aa", 7206
);

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from({ year: 7206, monthCode: "M12", day: 29, hour: 12, minute: 34, calendar }, options).subtract(months2weeks3),
  7207, 2, "M02", 20, 12, 34, 0, 0, 0, 0, "add 2 months 3 weeks from end of year to next year", "aa", 7207
);

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from({ year: 7206, monthCode: "M06", day: 1, hour: 12, minute: 34, calendar }, options).subtract(months2weeks3n),
  7206, 3, "M03", 10, 12, 34, 0, 0, 0, 0, "subtract 2 months 3 weeks from non-leap day/month, ending in same year", "aa", 7206
);

TemporalHelpers.assertPlainDateTime(
  date720601.subtract(months2weeks3n),
  7205, 11, "M11", 10, 12, 34, 0, 0, 0, 0, "subtract 2 months 3 weeks from beginning of year to previous year", "aa", 7205
);


// Days

const days10 = new Temporal.Duration(0, 0, 0, /* days = */ -10);
const days10n = new Temporal.Duration(0, 0, 0, 10);

const date72060129 = Temporal.PlainDateTime.from({ year: 7206, monthCode: "M01", day: 30, hour: 12, minute: 34, calendar }, options);

TemporalHelpers.assertPlainDateTime(
  date720601.subtract(days10),
  7206, 1, "M01", 11, 12, 34, 0, 0, 0, 0, "add 10 days, ending in same month", "aa", 7206
);

TemporalHelpers.assertPlainDateTime(
  date72060129.subtract(days10),
  7206, 2, "M02", 10, 12, 34, 0, 0, 0, 0, "add 10 days, ending in following month", "aa", 7206
);

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from({ year: 7206, monthCode: "M13", day: 5, hour: 12, minute: 34, calendar }, options).subtract(days10),
  7207, 1, "M01", 10, 12, 34, 0, 0, 0, 0, "add 10 days, ending in following year", "aa", 7207
);

TemporalHelpers.assertPlainDateTime(
  date72060129.subtract(days10n),
  7206, 1, "M01", 20, 12, 34, 0, 0, 0, 0, "subtract 10 days, ending in same month", "aa", 7206
);

TemporalHelpers.assertPlainDateTime(
  date720406.subtract(days10n),
  7204, 5, "M05", 21, 12, 34, 0, 0, 0, 0, "subtract 10 days, ending in previous month", "aa", 7204
);

TemporalHelpers.assertPlainDateTime(
  date720601.subtract(days10n),
  7205, 12, "M12", 26, 12, 34, 0, 0, 0, 0, "subtract 10 days, ending in previous year", "aa", 7205
);
