// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: New calendar is preserved if original PDT has ISO calendar
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);
const shifted = dt.withPlainDate("2008-09-06[u-ca=japanese]");

TemporalHelpers.assertPlainDateTime(
  shifted,
  2008, 9, "M09", 6, 3, 24, 30, 0, 0, 0,
  "calendar is unchanged if input has ISO calendar (1)",
  "heisei",
  20
);

assert.sameValue(
  shifted.calendar.toString(),
  "japanese",
  "calendar is unchanged if input has ISO calendar (2)"
);
