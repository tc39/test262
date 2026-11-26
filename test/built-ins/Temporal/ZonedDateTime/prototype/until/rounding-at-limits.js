// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: >
  Rounding to hours near the epoch nanoseconds limits with a date largestUnit,
  which computes the start and end of the final day
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const maxEpochNanoseconds = 86400_0000_0000_000_000_000n;
const minEpochNanoseconds = -maxEpochNanoseconds;
const nanosecondsPerHour = 3600_000_000_000n;
const nanosecondsPerDay = 86400_000_000_000n;

const largestUnit = "day";

const max = new Temporal.ZonedDateTime(maxEpochNanoseconds, "UTC");
const min = new Temporal.ZonedDateTime(minEpochNanoseconds, "UTC");
const maxMinusHour = new Temporal.ZonedDateTime(maxEpochNanoseconds - nanosecondsPerHour, "UTC");
const minPlusHour = new Temporal.ZonedDateTime(minEpochNanoseconds + nanosecondsPerHour, "UTC");

TemporalHelpers.assertDuration(
  max.until(maxMinusHour, { largestUnit, smallestUnit: "hour" }),
  0, 0, 0, 0, -1, 0, 0, 0, 0, 0,
  "rounding to hours from the maximum leaves the epoch nanoseconds in range"
);
TemporalHelpers.assertDuration(
  min.until(minPlusHour, { largestUnit, smallestUnit: "hour" }),
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
  "rounding to hours from the minimum leaves the epoch nanoseconds in range"
);

const maxPositiveOffset = new Temporal.ZonedDateTime(maxEpochNanoseconds, "+23:59");
const maxMinusHourPositiveOffset = new Temporal.ZonedDateTime(maxEpochNanoseconds - nanosecondsPerHour, "+23:59");
const minNegativeOffset = new Temporal.ZonedDateTime(minEpochNanoseconds, "-23:59");
const minPlusHourNegativeOffset = new Temporal.ZonedDateTime(minEpochNanoseconds + nanosecondsPerHour, "-23:59");

TemporalHelpers.assertDuration(
  maxPositiveOffset.until(maxMinusHourPositiveOffset, { largestUnit, smallestUnit: "hour" }),
  0, 0, 0, 0, -1, 0, 0, 0, 0, 0,
  "rounding to hours from the maximum in a positive-offset time zone"
);
TemporalHelpers.assertDuration(
  minNegativeOffset.until(minPlusHourNegativeOffset, { largestUnit, smallestUnit: "hour" }),
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
  "rounding to hours from the minimum in a negative-offset time zone"
);

const threeDaysBeforeMax = new Temporal.ZonedDateTime(maxEpochNanoseconds - 3n * nanosecondsPerDay, "UTC");
const twoDaysAfterMin = new Temporal.ZonedDateTime(minEpochNanoseconds + 2n * nanosecondsPerDay, "UTC");

TemporalHelpers.assertDuration(
  threeDaysBeforeMax.until(maxMinusHour, {
    largestUnit,
    smallestUnit: "hour",
    roundingIncrement: 2,
    roundingMode: "ceil"
  }),
  0, 0, 0, 3, 0, 0, 0, 0, 0, 0,
  "rounding the last 23 hours of the range up to a whole day reaches the maximum"
);
TemporalHelpers.assertDuration(
  twoDaysAfterMin.until(minPlusHour, {
    largestUnit,
    smallestUnit: "hour",
    roundingIncrement: 2,
    roundingMode: "floor"
  }),
  0, 0, 0, -2, 0, 0, 0, 0, 0, 0,
  "rounding the first 23 hours of the range down to a whole day reaches the minimum"
);

assert.throws(
  RangeError,
  () => maxMinusHour.until(max, { largestUnit, smallestUnit: "hour" }),
  "rounding up to the maximum requires a following day outside the epoch nanoseconds range"
);
assert.throws(
  RangeError,
  () => minPlusHour.until(min, { largestUnit, smallestUnit: "hour" }),
  "rounding down to the minimum requires a preceding day outside the epoch nanoseconds range"
);
