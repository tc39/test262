// Copyright (C) 2026 Rudi Theunissen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindate.prototype.dayofweek
description: dayOfWeek returns 1 (Monday) through 7 (Sunday) across all months
info: |
  Tests one date per month in the year 2023 to verify correct day-of-week
  computation. The basic test only covers seven consecutive days in a single
  month (November 1976), so all tested dates share the same month in the
  calendar algorithm.
features: [Temporal]
---*/

const expected = [
  // [year, month, day, dayOfWeek]
  [2023, 1, 1, 7],   // Sunday
  [2023, 2, 1, 3],   // Wednesday
  [2023, 3, 1, 3],   // Wednesday
  [2023, 4, 1, 6],   // Saturday
  [2023, 5, 1, 1],   // Monday
  [2023, 6, 1, 4],   // Thursday
  [2023, 7, 1, 6],   // Saturday
  [2023, 8, 1, 2],   // Tuesday
  [2023, 9, 1, 5],   // Friday
  [2023, 10, 1, 7],  // Sunday
  [2023, 11, 1, 3],  // Wednesday
  [2023, 12, 1, 5],  // Friday
];

for (const [year, month, day, dow] of expected) {
  const date = new Temporal.PlainDate(year, month, day);
  assert.sameValue(date.dayOfWeek, dow, `${date} should be dayOfWeek ${dow}`);
}
