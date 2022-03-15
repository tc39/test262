// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: Switching to a non-ISO calendar is acceptable
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);
const shifted = dt.withCalendar("japanese").withPlainDate("2008-09-06");

TemporalHelpers.assertPlainDateTime(
  shifted,
  2008, 9, "M09", 6, 3, 24, 30, 0, 0, 0,
  "result contains a non-ISO calendar if present in the input (1)"
);

assert.sameValue(
  shifted.calendar.toString(),
  "japanese",
  "result contains a non-ISO calendar if present in the input (2)"
);
