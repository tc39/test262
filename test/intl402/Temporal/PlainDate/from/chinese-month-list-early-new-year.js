// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.from
description: >
  Chinese calendar month list construction for years where the Chinese New Year
  falls unusually early, causing Feb 17 to land in month 2 or a leap month
  after month 1. These are rare edge cases in the month list algorithm.
features: [Temporal]
---*/

const chinese = "chinese";
const dangi = "dangi";

// Year 7625: Chinese New Year is unusually early, so Feb 17 (the initial probe
// date used in the month list algorithm) falls in month 2 instead of month 1.
// The algorithm must back up to find the start of the year.
var d7625 = Temporal.PlainDate.from({ year: 7625, monthCode: "M01", day: 1, calendar: chinese });
assert.sameValue(d7625.monthCode, "M01", "Chinese 7625 M01 monthCode");
assert.sameValue(d7625.month, 1, "Chinese 7625 M01 month number");

// Verify the year has expected structure
var d7625m13 = Temporal.PlainDate.from({ year: 7625, monthCode: "M12", day: 1, calendar: chinese });
assert.sameValue(d7625m13.monthCode, "M12", "Chinese 7625 M12 monthCode");

// Year 7253: This year has a leap month after month 1 (M01L), and Feb 17 lands
// in that leap month. The algorithm must recognize the "1bis" month string from
// Intl.DateTimeFormat and back up further to find month 1.
var d7253 = Temporal.PlainDate.from({ year: 7253, monthCode: "M01", day: 1, calendar: chinese });
assert.sameValue(d7253.monthCode, "M01", "Chinese 7253 M01 monthCode");
assert.sameValue(d7253.month, 1, "Chinese 7253 M01 month number");
assert.sameValue(d7253.inLeapYear, true, "Chinese 7253 is a leap year (has M01L)");
assert.sameValue(d7253.monthsInYear, 13, "Chinese 7253 has 13 months");

// Verify the leap month M01L exists
var d7253leap = Temporal.PlainDate.from({ year: 7253, monthCode: "M01L", day: 1, calendar: chinese });
assert.sameValue(d7253leap.monthCode, "M01L", "Chinese 7253 M01L monthCode");
assert.sameValue(d7253leap.month, 2, "Chinese 7253 M01L month ordinal is 2");

// Dangi calendar has the same structure as Chinese for these edge cases.
var dangi7625 = Temporal.PlainDate.from({ year: 7625, monthCode: "M01", day: 1, calendar: dangi });
assert.sameValue(dangi7625.monthCode, "M01", "Dangi 7625 M01 monthCode");

var dangi7253 = Temporal.PlainDate.from({ year: 7253, monthCode: "M01", day: 1, calendar: dangi });
assert.sameValue(dangi7253.monthCode, "M01", "Dangi 7253 M01 monthCode");
assert.sameValue(dangi7253.inLeapYear, true, "Dangi 7253 is a leap year");
assert.sameValue(dangi7253.monthsInYear, 13, "Dangi 7253 has 13 months");
