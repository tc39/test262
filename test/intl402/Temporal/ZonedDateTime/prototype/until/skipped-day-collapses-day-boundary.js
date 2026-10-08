// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: >
  Difference with rounding to time smallestUnit where day boundary collapses to
  zero due to skipped calendar day
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const start = Temporal.ZonedDateTime.from("2012-01-01T12:00:00+14:00[Pacific/Apia]");
const end = Temporal.ZonedDateTime.from("2011-12-31T12:00:00+14:00[Pacific/Apia]");
TemporalHelpers.assertDuration(
  start.until(end, { largestUnit: "days", smallestUnit: "hours" }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "spanning a skipped calendar day, rounded to hours"
);

const end2 = Temporal.ZonedDateTime.from("2011-12-31T11:00:00+14:00[Pacific/Apia]");
TemporalHelpers.assertDuration(
  start.until(end2, { largestUnit: "days", smallestUnit: "hours" }),
  0, 0, 0, -1, -1, 0, 0, 0, 0, 0,
  "spanning a skipped calendar day with 1-hour remainder, rounded to hours"
);
