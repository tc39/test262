// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: RangeError thrown when smallestUnit is larger than largestUnit
features: [Temporal]
---*/

const earlier = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
const later = new Temporal.ZonedDateTime(1_000_090_061_987_654_321n, "UTC");
const units = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
for (let largestIdx = 1; largestIdx < units.length; largestIdx++) {
  for (let smallestIdx = 0; smallestIdx < largestIdx; smallestIdx++) {
    const largestUnit = units[largestIdx];
    const smallestUnit = units[smallestIdx];
    assert.throws(RangeError, () => later.since(earlier, { largestUnit, smallestUnit }));
  }
}
