// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: >
  Reference ISO day is chosen to be the first day of the calendar month.
info: |
  7.c. Let firstDayIndex be the 1-based index of the first day of the month
       described by fields (i.e., 1 unless the month's first day is skipped by
       this calendar.)
    d. Perform ! CreateDataPropertyOrThrow(fields, "day", 𝔽(firstDayIndex)).
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Notes:
// - "heisei" era started January 8, 1989.
// - "reiwa" era started May 1, 2019.

const japanese = new Temporal.Calendar("japanese");

const result1 = japanese.yearMonthFromFields({ year: 2024, monthCode: "M01" });
TemporalHelpers.assertPlainYearMonth(
  result1,
  2024, 1, "M01",
  "reference day is 1",
  "reiwa", 6, /* reference day = */ 1
);

// Reiwa era started on the first day of the month, so the reference day is 1.
const result2 = japanese.yearMonthFromFields({ era: "reiwa", eraYear: 1, monthCode: "M05" });
TemporalHelpers.assertPlainYearMonth(
  result2,
  2019, 5, "M05",
  "reference day is 1",
  "reiwa", 1, /* reference day = */ 1
);

// Heisei era started on the eighth day of the month, so the reference day is 8.
const result3 = japanese.yearMonthFromFields({ era: "heisei", eraYear: 1, monthCode: "M01" });
TemporalHelpers.assertPlainYearMonth(
  result3,
  1989, 1, "M01",
  "reference day is 8",
  "heisei", 1, /* reference day = */ 8
);
