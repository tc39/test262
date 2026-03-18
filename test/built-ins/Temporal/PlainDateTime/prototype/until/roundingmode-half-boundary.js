// Copyright (C) 2026 Rudolph Gottesheim. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.until
description: Half rounding modes at the exact 0.5 boundary
info: |
  The datetimes 2019-01-01T00:00 and 2020-07-02T00:00 produce a difference of
  1 year plus 183 days. Since the intermediate year (2020) is a leap year with
  366 days, the fractional progress is exactly 183/366 = 0.5. This exercises
  the tie-breaking behavior of all half-* rounding modes in
  RoundRelativeDuration.

  The datetimes 2018-01-01T00:00 and 2020-07-02T00:00 produce a difference of
  2 years plus 183 days, giving the same 0.5 fractional progress but with an
  even integer part. This distinguishes halfEven from halfExpand: halfEven
  rounds to the nearest even integer (2), while halfExpand rounds away from
  zero (3).
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// 1.5 years: odd integer part (1) + exact 0.5 fractional progress
const earlier1 = new Temporal.PlainDateTime(2019, 1, 1, 0, 0, 0, 0, 0, 0);
const later = new Temporal.PlainDateTime(2020, 7, 2, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "trunc" }),
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, trunc rounds toward zero"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "floor" }),
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, floor rounds toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "ceil" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, ceil rounds toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "expand" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, expand rounds away from zero"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "halfExpand" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, halfExpand rounds 0.5 away from zero"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "halfCeil" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, halfCeil rounds 0.5 toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "halfFloor" }),
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, halfFloor rounds 0.5 toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "halfTrunc" }),
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, halfTrunc rounds 0.5 toward zero"
);
TemporalHelpers.assertDuration(
  earlier1.until(later, { smallestUnit: "years", roundingMode: "halfEven" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "1.5 years, halfEven rounds 0.5 to nearest even (2)"
);

// 2.5 years: even integer part (2) + exact 0.5 fractional progress
// This distinguishes halfEven from halfExpand
const earlier2 = new Temporal.PlainDateTime(2018, 1, 1, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "trunc" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, trunc rounds toward zero"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "floor" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, floor rounds toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "ceil" }),
  3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, ceil rounds toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "expand" }),
  3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, expand rounds away from zero"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "halfExpand" }),
  3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, halfExpand rounds 0.5 away from zero"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "halfCeil" }),
  3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, halfCeil rounds 0.5 toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "halfFloor" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, halfFloor rounds 0.5 toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "halfTrunc" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, halfTrunc rounds 0.5 toward zero"
);
TemporalHelpers.assertDuration(
  earlier2.until(later, { smallestUnit: "years", roundingMode: "halfEven" }),
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "2.5 years, halfEven rounds 0.5 to nearest even (2)"
);
