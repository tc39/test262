// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.from
description: >
  Check from with leap years and common years
  (indian calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "indian";

const cases = [
  ["2004-03-21[+00:00][u-ca=indian]", 1926, 1, "M01", 1, "first day of leap year"],
  ["2005-03-22[+00:00][u-ca=indian]", 1927, 1, "M01", 1, "first day of common year"],
];
for (const [isoString, year, month, monthCode, day, descr] of cases) {
  const date = Temporal.ZonedDateTime.from(isoString);

  TemporalHelpers.assertPlainDateTime(date.toPlainDateTime(), year, month, monthCode, day,0, 0, 0, 0, 0, 0,  descr, "shaka", year);
}

