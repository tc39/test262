// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.since
description: Test invalid increments.
features: [Temporal]
---*/

const earlier = Temporal.Instant.from("1976-11-18T15:23:30.123456789Z");
const later = Temporal.Instant.from("2019-10-29T10:46:38.271986102Z");
const largestUnit = "hours";

// throws on increments that do not divide evenly into the next highest
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "hours",
  roundingIncrement: 11
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "minutes",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "seconds",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "milliseconds",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "microseconds",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "nanoseconds",
  roundingIncrement: 29
}));

// throws on increments that are equal to the next highest
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "hours",
  roundingIncrement: 24
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "minutes",
  roundingIncrement: 60
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "seconds",
  roundingIncrement: 60
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "milliseconds",
  roundingIncrement: 1000
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "microseconds",
  roundingIncrement: 1000
}));
assert.throws(RangeError, () => later.since(earlier, {
  largestUnit,
  smallestUnit: "nanoseconds",
  roundingIncrement: 1000
}));
