// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: until() result where skipped day collapses bounding window
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const start = Temporal.ZonedDateTime.from("2012-01-01T12:00:00+14:00[Pacific/Apia]");
const end = Temporal.ZonedDateTime.from("2011-12-31T12:00:00+14:00[Pacific/Apia]");
TemporalHelpers.assertDuration(
  start.until(end, { smallestUnit: "days" }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "until spanning a skipped calendar day"
);

const end2 = Temporal.ZonedDateTime.from("2011-12-31T11:00:00+14:00[Pacific/Apia]");
TemporalHelpers.assertDuration(
  start.until(end2, { smallestUnit: "days" }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "bounding window extending into a skipped calendar day"
);

const start2 = Temporal.ZonedDateTime.from("2012-01-06T12:00:00+14:00[Pacific/Apia]");
const end3 = Temporal.ZonedDateTime.from("2011-12-31T09:00:00+14:00[Pacific/Apia]");
TemporalHelpers.assertDuration(
  start2.until(end3, { smallestUnit: "weeks" }),
  0, 0, -1, 0, 0, 0, 0, 0, 0, 0,
  "week bounding window extending into a skipped calendar day"
);
