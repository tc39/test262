// Copyright 2025 Google Inc, Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.inleapyear
description: inLeapYear should work for Dangi calendar dates
features: [Temporal]
---*/

const calendar = "dangi";

const daysInMonthCases = [
  {
    year: 2001,
    leap: "M04L",
    days: [
      30,
      30,
      29,
      30,
      29,
      30,
      29,
      29,
      30,
      29,
      30,
      29,
      30
    ]
  },
];
for (var {year, leap, days} of daysInMonthCases) {
  const date = Temporal.PlainDate.from({
    year,
    month: 1,
    day: 1,
    calendar
  });
  assert.sameValue(date.inLeapYear, true);
}
