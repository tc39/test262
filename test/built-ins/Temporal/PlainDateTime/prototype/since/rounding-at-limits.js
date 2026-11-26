// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.since
description: Rounding to hour and minute at limits of representable range
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const min = new Temporal.PlainDateTime(-271821, 4, 19, 0, 0, 0, 0, 0, 1);
const max = new Temporal.PlainDateTime(275760, 9, 13, 23, 59, 59, 999, 999, 999);

const largestUnit = "day";

TemporalHelpers.assertDuration(
  max.since(min, { largestUnit, smallestUnit: "hour" }),
  0, 0, 0, 200000001, 23, 0, 0, 0, 0, 0,
  "truncating to hours from the maximum to the minimum"
);
TemporalHelpers.assertDuration(
  min.since(max, { largestUnit, smallestUnit: "hour" }),
  0, 0, 0, -200000001, -23, 0, 0, 0, 0, 0,
  "truncating to hours from the minimum to the maximum"
);
TemporalHelpers.assertDuration(
  max.since(min, { largestUnit, smallestUnit: "hour", roundingMode: "ceil" }),
  0, 0, 0, 200000002, 0, 0, 0, 0, 0, 0,
  "rounding hours up expands to the next day at the maximum"
);
TemporalHelpers.assertDuration(
  min.since(max, { largestUnit, smallestUnit: "hour", roundingMode: "floor" }),
  0, 0, 0, -200000002, 0, 0, 0, 0, 0, 0,
  "rounding hours down expands to the next day at the minimum"
);
TemporalHelpers.assertDuration(
  max.since(min, { largestUnit, smallestUnit: "minute" }),
  0, 0, 0, 200000001, 23, 59, 0, 0, 0, 0,
  "truncating to minutes from the maximum to the minimum"
);
TemporalHelpers.assertDuration(
  min.since(max, { largestUnit, smallestUnit: "minute" }),
  0, 0, 0, -200000001, -23, -59, 0, 0, 0, 0,
  "truncating to minutes from the minimum to the maximum"
);
