// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.daysinmonth
description: Days in each month in the Hebrew calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "hebrew";
const options = { overflow: "reject" };

// 5732 = ISO year 1972
// 5732 is a common year; 5730 is a leap year

const sampleYears = {
  5730: [
    30,
    29,
    29,
    29,
    30,
    30,
    29,
    30,
    29,
    30,
    29,
    30,
    29,
  ],
  5732: [
    30,
    30,
    30,
    29,
    30,
    29,
    30,
    29,
    30,
    29,
    30,
    29,
    29,
  ]
};

for (var [year, daysInMonth] of Object.entries(sampleYears)) {
  for (var month = 1; month < daysInMonth.length; month++) {
    const date = Temporal.ZonedDateTime.from({
      year,
      month,
      day: 1,
      calendar, hour: 12, minute: 34, timeZone: "UTC"
    });
    assert.sameValue(date.daysInMonth, daysInMonth[month - 1], `${date}`);
  }
}

