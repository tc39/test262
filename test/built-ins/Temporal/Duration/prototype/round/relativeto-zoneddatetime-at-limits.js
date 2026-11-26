// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: >
  Rounding with a ZonedDateTime relativeTo at the limits, where the final day's
  bounds are at the local-offset limits
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const max = new Temporal.ZonedDateTime(86400_0000_0000_000_000_000n, "+23:59");
const min = new Temporal.ZonedDateTime(-86400_0000_0000_000_000_000n, "-23:59");

const largestUnit = "day";

for (const [label, relativeTo, sign] of [
  ["maximum", max, -1],
  ["minimum", min, 1]
]) {
  const duration = new Temporal.Duration(0, 0, 0, 0, sign);

  TemporalHelpers.assertDuration(
    duration.round({ largestUnit, smallestUnit: "hour", relativeTo }),
    0, 0, 0, 0, sign, 0, 0, 0, 0, 0,
    `rounding one hour to hours relative to the ${label}`
  );
  TemporalHelpers.assertDuration(
    duration.round({ largestUnit, smallestUnit: "day", relativeTo }),
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    `truncating one hour to days relative to the ${label}`
  );
  TemporalHelpers.assertDuration(
    duration.round({ largestUnit, smallestUnit: "day", roundingMode: "expand", relativeTo }),
    0, 0, 0, sign, 0, 0, 0, 0, 0, 0,
    `expanding one hour to days relative to the ${label}`
  );
}

const twentyThreeHoursBeforeMax = new Temporal.Duration(0, 0, 0, 0, -23);
TemporalHelpers.assertDuration(
  twentyThreeHoursBeforeMax.round({
    largestUnit,
    smallestUnit: "hour",
    roundingIncrement: 2,
    roundingMode: "floor",
    relativeTo: max
  }),
  0, 0, 0, -1, 0, 0, 0, 0, 0, 0,
  "rounding 23 hours down to a whole day relative to the maximum reaches the final day"
);

const twentyThreeHoursAfterMin = new Temporal.Duration(0, 0, 0, 0, 23);
TemporalHelpers.assertDuration(
  twentyThreeHoursAfterMin.round({
    largestUnit,
    smallestUnit: "hour",
    roundingIncrement: 2,
    roundingMode: "ceil",
    relativeTo: min
  }),
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  "rounding 23 hours up to a whole day relative to the minimum reaches the first day"
);

assert.throws(
  RangeError,
  () => new Temporal.Duration(0, 0, 0, 0, 1).round({
    largestUnit,
    smallestUnit: "hour",
    relativeTo: max
  }),
  "a positive duration relative to the maximum is out of range"
);
assert.throws(
  RangeError,
  () => new Temporal.Duration(0, 0, 0, 0, -1).round({
    largestUnit,
    smallestUnit: "hour",
    relativeTo: min
  }),
  "a negative duration relative to the minimum is out of range"
);
