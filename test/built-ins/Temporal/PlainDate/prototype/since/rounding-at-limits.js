// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.since
description: Rounding date differences with minimum PlainDate receiver
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Edge case -271821-04-19T00:00 is just below the PlainDateTime lower limit
const min = new Temporal.PlainDate(-271821, 4, 19);
const max = new Temporal.PlainDate(275760, 9, 13);

TemporalHelpers.assertDuration(
  max.since(min, { largestUnit: "day", smallestUnit: "day", roundingIncrement: 2 }),
  0, 0, 0, 200000000, 0, 0, 0, 0, 0, 0,
  "truncating to 2-day increments from the maximum to the minimum"
);
TemporalHelpers.assertDuration(
  min.since(max, { largestUnit: "day", smallestUnit: "day", roundingIncrement: 2 }),
  0, 0, 0, -200000000, 0, 0, 0, 0, 0, 0,
  "truncating to 2-day increments from the minimum to the maximum"
);
TemporalHelpers.assertDuration(
  max.since(min, { largestUnit: "day", smallestUnit: "day", roundingIncrement: 2, roundingMode: "expand" }),
  0, 0, 0, 200000002, 0, 0, 0, 0, 0, 0,
  "expanding to 2-day increments from the maximum to the minimum"
);
TemporalHelpers.assertDuration(
  min.since(max, { largestUnit: "day", smallestUnit: "day", roundingIncrement: 2, roundingMode: "expand" }),
  0, 0, 0, -200000002, 0, 0, 0, 0, 0, 0,
  "expanding to 2-day increments from the minimum to the maximum"
);

const minPlusOneDay = new Temporal.PlainDate(-271821, 4, 20);
const minPlusOneWeek = new Temporal.PlainDate(-271821, 4, 26);
const minPlusOneMonth = new Temporal.PlainDate(-271821, 5, 19);
const minPlusOneYear = new Temporal.PlainDate(-271820, 4, 19);

TemporalHelpers.assertDuration(
  min.since(minPlusOneDay, { roundingIncrement: 2, roundingMode: "expand" }),
  0, 0, 0, -2, 0, 0, 0, 0, 0, 0,
  "expanding one day to 2-day increments at the minimum"
);
TemporalHelpers.assertDuration(
  min.since(minPlusOneWeek, { smallestUnit: "week" }),
  0, 0, -1, 0, 0, 0, 0, 0, 0, 0,
  "rounding one week to weeks at the minimum"
);
TemporalHelpers.assertDuration(
  min.since(minPlusOneMonth, { smallestUnit: "month" }),
  0, -1, 0, 0, 0, 0, 0, 0, 0, 0,
  "rounding one month to months at the minimum"
);
TemporalHelpers.assertDuration(
  min.since(minPlusOneYear, { smallestUnit: "year" }),
  -1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "rounding one year to years at the minimum"
);

// Causes the [[EndEpochNanoseconds]] field of the nudge window to be the
// edge-case value
TemporalHelpers.assertDuration(
  new Temporal.PlainDate(-271821, 4, 19).since(new Temporal.PlainDate(-271821, 4, 20), { smallestUnit: "year" }),
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "rounding with the negative outer bound of the nudge window at the minimum"
);
// Likewise for the [[StartEpochNanoseconds]] field
TemporalHelpers.assertDuration(
  new Temporal.PlainDate(-271821, 5, 19).since(new Temporal.PlainDate(-271821, 5, 1), { smallestUnit: "month" }),
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  "rounding with the negative outer bound of the nudge window at the minimum"
);
