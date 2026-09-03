// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: >
  Rounding a negative duration where skipped day collapses bounding window
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const relativeTo = Temporal.ZonedDateTime.from("2012-01-01T12:00:00+14:00[Pacific/Apia]");
const d = new Temporal.Duration(0, 0, 0, -1);
TemporalHelpers.assertDuration(
  d.round({ smallestUnit: "days", relativeTo }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "-P1D rounded to days with bounding window spanning a skipped calendar day"
);

const d2 = new Temporal.Duration(0, 0, 0, 0, -25);
TemporalHelpers.assertDuration(
  d2.round({ smallestUnit: "days", relativeTo }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "-PT25H rounded to 1 day, bounding window extending into a skipped calendar day"
);

const d3 = new Temporal.Duration(0, 0, 0, 0, -36);
TemporalHelpers.assertDuration(
  d3.round({ smallestUnit: "days", relativeTo }),
  0, 0, 0, -2, 0, 0, 0, 0, 0, 0,
  "-PT36H rounded to 2 days, bounding window extending into a skipped calendar day"
);

const d4 = new Temporal.Duration(0, 0, 0, -2, -6);
TemporalHelpers.assertDuration(
  d4.round({ smallestUnit: "days", roundingIncrement: 2, relativeTo }),
  0, 0, 0, -2, 0, 0, 0, 0, 0, 0,
  "-P2DT6H rounded with increment 2 to 2 days, bounding window extending into a skipped calendar day"
);

const relativeTo2 = Temporal.ZonedDateTime.from("2012-01-06T12:00:00+14:00[Pacific/Apia]");
const d5 = new Temporal.Duration(0, 0, 0, -6, -3);
TemporalHelpers.assertDuration(
  d5.round({ smallestUnit: "weeks", relativeTo: relativeTo2 }),
  0, 0, -1, 0, 0, 0, 0, 0, 0, 0,
  "-P6DT3H rounded to weeks, bounding window extending into a skipped calendar day"
);
