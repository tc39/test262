// Copyright (C) 2026 Rudolph Gottesheim. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Half rounding modes at the exact 0.5 boundary
info: |
  Calling since() in the negative direction (earlier.since(later)) with
  instants 2019-01-01T00:00Z and 2020-07-02T00:00Z (in UTC) produces a
  difference of -1 year minus 183 days. The intermediate year (2020) is a
  leap year with 366 days, so the fractional progress is exactly
  183/366 = 0.5. This exercises the tie-breaking behavior of all half-*
  rounding modes in RoundRelativeDuration in the negative direction, where
  halfExpand and halfCeil diverge (away from zero vs toward positive infinity).

  With 2018-01-01T00:00Z and 2020-07-02T00:00Z the difference is -2 years
  minus 183 days, giving the same 0.5 fractional progress but with an even
  integer part. This distinguishes halfEven from halfExpand in the negative
  direction.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// -1.5 years: odd integer part (1) + exact 0.5 fractional progress
const earlier1 = new Temporal.ZonedDateTime(1546300800_000_000_000n /* 2019-01-01T00:00:00Z */, "UTC");
const later = new Temporal.ZonedDateTime(1593648000_000_000_000n /* 2020-07-02T00:00:00Z */, "UTC");

assert.sameValue(
  earlier1.until(later).total({ unit: "years", relativeTo: earlier1 }),
  1.5,
  "1.5-year duration is on a 0.5 boundary"
);

TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "trunc" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, trunc rounds toward zero"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "floor" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, floor rounds toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "ceil" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, ceil rounds toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "expand" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, expand rounds away from zero"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfExpand" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfExpand breaks ties away from zero"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfCeil" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfCeil breaks ties toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfFloor" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfFloor breaks ties toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfTrunc" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfTrunc breaks ties toward zero"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfEven" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfEven breaks ties to nearest even (-2)"
);

// -2.5 years: even integer part (2) + exact 0.5 fractional progress
// This distinguishes halfEven from halfExpand in the negative direction
const earlier2 = new Temporal.ZonedDateTime(1514764800_000_000_000n /* 2018-01-01T00:00:00Z */, "UTC");

assert.sameValue(
  earlier2.until(later).total({ unit: "years", relativeTo: earlier2 }),
  2.5,
  "2.5-year duration is on a 0.5 boundary"
);

TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "trunc" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, trunc rounds toward zero"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "floor" }),
  -3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, floor rounds toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "ceil" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, ceil rounds toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "expand" }),
  -3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, expand rounds away from zero"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfExpand" }),
  -3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfExpand breaks ties away from zero"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfCeil" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfCeil breaks ties toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfFloor" }),
  -3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfFloor breaks ties toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfTrunc" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfTrunc breaks ties toward zero"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfEven" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfEven breaks ties to nearest even (-2)"
);
