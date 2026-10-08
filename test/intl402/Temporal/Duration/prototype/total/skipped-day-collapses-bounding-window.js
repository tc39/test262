// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.total
description: >
  Totalling a negative duration where skipped day collapses bounding window
features: [Temporal]
---*/

const relativeTo = Temporal.ZonedDateTime.from("2012-01-01T12:00:00+14:00[Pacific/Apia]");
const d = new Temporal.Duration(0, 0, 0, -1);
assert.sameValue(
  d.total({ unit: "days", relativeTo }),
  -1,
  "-1 day total in days with bounding window spanning a skipped calendar day"
);

const d2 = new Temporal.Duration(0, 0, 0, 0, -25);
assert.sameValue(
  d2.total({ unit: "days", relativeTo }),
  -25 / 24,
  "-25 hours total in days, bounding window extending into a skipped calendar day"
);

const d3 = new Temporal.Duration(0, 0, 0, 0, -36);
assert.sameValue(
  d3.total({ unit: "days", relativeTo }),
  -1.5,
  "-36 hours total in days, bounding window extending into a skipped calendar day"
);

const relativeTo2 = Temporal.ZonedDateTime.from("2012-01-06T12:00:00+14:00[Pacific/Apia]");
const d4 = new Temporal.Duration(0, 0, 0, -6, -3);
assert.sameValue(
  d4.total({ unit: "weeks", relativeTo: relativeTo2 }),
  -(168 + 3) / 168,
  "-6 days 3 hours total in weeks, bounding window extending into a skipped calendar day, making a 6-day week"
);
