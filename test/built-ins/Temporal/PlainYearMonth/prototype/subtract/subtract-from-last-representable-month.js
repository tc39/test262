// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: RangeError should not be thrown when subtracting duration from last representable month.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const lastMonth = new Temporal.PlainYearMonth(275760, 9);

const durations = [
  [{ seconds: 1 }, "seconds"],
  [{ minutes: 1 }, "minutes"],
  [{ hours: 1 }, "hours"],
  [{ days: 1 }, "days"],
  [{ weeks: 1 }, "weeks"],
];

durations.forEach(([duration, unit]) =>
  TemporalHelpers.assertPlainYearMonth(lastMonth.subtract(duration), lastMonth.year, lastMonth.month, lastMonth.monthCode, `subtracting ${unit} from ${lastMonth}`)
);

TemporalHelpers.assertPlainYearMonth(lastMonth.subtract({ months: 1 }), lastMonth.year, 8, "M08", `subtracting months from ${lastMonth}`);

TemporalHelpers.assertPlainYearMonth(lastMonth.subtract({ years: 1 }), lastMonth.year - 1, lastMonth.month, lastMonth.monthCode, `subtracting years from ${lastMonth}`);
