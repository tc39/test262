// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: >
  Rounding time units when day boundary collapses to zero due to skipped
  calendar day
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const relativeTo = Temporal.ZonedDateTime.from("2012-01-01T12:00:00+14:00[Pacific/Apia]");

const d = new Temporal.Duration(0, 0, 0, -1);
TemporalHelpers.assertDuration(
  d.round({ smallestUnit: "hours", relativeTo }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "-P1D rounded to hours: day boundary falls on skipped calendar day"
);
