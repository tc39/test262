// Copyright (C) 2026 Rudi Theunissen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: Half rounding modes at the exact 0.5 boundary
info: |
  Calling since() in the negative direction (earlier.since(later)) with
  PlainYearMonth(2018, 6) and PlainYearMonth(2019, 12) produces a difference
  of -1 year minus 6 months. RoundRelativeDuration converts the 6-month
  remainder to days relative to the reference date (1st of the month). From
  2019-06-01, six months spans Jun(30)+Jul(31)+Aug(31)+Sep(30)+Oct(31)+
  Nov(30) = 183 days, and the year from 2019-06-01 to 2020-06-01 contains
  366 days (crossing Feb 29, 2020), giving a fractional progress of exactly
  183/366 = 0.5. This exercises the tie-breaking behavior of all half-*
  rounding modes in RoundRelativeDuration in the negative direction, where
  halfExpand and halfCeil diverge (away from zero vs toward positive infinity).

  With PlainYearMonth(2017, 6) and PlainYearMonth(2019, 12) the difference is
  -2 years minus 6 months, giving the same 0.5 fractional progress but with
  an even integer part. This distinguishes halfEven from halfExpand in the
  negative direction.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// -1.5 years: odd integer part (1) + exact 0.5 fractional progress
const earlier1 = new Temporal.PlainYearMonth(2018, 6);
const later = new Temporal.PlainYearMonth(2019, 12);

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
  "-1.5 years, halfExpand rounds 0.5 away from zero"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfCeil" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfCeil rounds 0.5 toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfFloor" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfFloor rounds 0.5 toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfTrunc" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfTrunc rounds 0.5 toward zero"
);
TemporalHelpers.assertDuration(
  earlier1.since(later, { smallestUnit: "years", roundingMode: "halfEven" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-1.5 years, halfEven rounds 0.5 to nearest even (-2)"
);

// -2.5 years: even integer part (2) + exact 0.5 fractional progress
// This distinguishes halfEven from halfExpand in the negative direction
const earlier2 = new Temporal.PlainYearMonth(2017, 6);

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
  "-2.5 years, halfExpand rounds 0.5 away from zero"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfCeil" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfCeil rounds 0.5 toward positive infinity"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfFloor" }),
  -3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfFloor rounds 0.5 toward negative infinity"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfTrunc" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfTrunc rounds 0.5 toward zero"
);
TemporalHelpers.assertDuration(
  earlier2.since(later, { smallestUnit: "years", roundingMode: "halfEven" }),
  -2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "-2.5 years, halfEven rounds 0.5 to nearest even (-2)"
);
