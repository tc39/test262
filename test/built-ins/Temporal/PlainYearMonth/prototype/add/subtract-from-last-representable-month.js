// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: RangeError should not be thrown when adding negative duration to last representable month.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const lastMonth = new Temporal.PlainYearMonth(275760, 9);

const durations = [
  [{ seconds: -1 }, "seconds"],
  [{ minutes: -1 }, "minutes"],
  [{ hours: -1 }, "hours"],
  [{ days: -1 }, "days"],
  [{ weeks: -1 }, "weeks"],
];

durations.forEach(([duration, unit]) =>
  TemporalHelpers.assertPlainYearMonth(lastMonth.add(duration), lastMonth.year, lastMonth.month, lastMonth.monthCode, `adding ${unit} to ${lastMonth}`)
);

TemporalHelpers.assertPlainYearMonth(lastMonth.add({ months: -1 }), lastMonth.year, 8, "M08", `adding months to ${lastMonth}`);

TemporalHelpers.assertPlainYearMonth(lastMonth.add({ years: -1 }), lastMonth.year - 1, lastMonth.month, lastMonth.monthCode, `adding years to ${lastMonth}`);

