// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.from
description: Temporal.Duration.from will throw RangeError with incorrect ISO8601 stirng.
info: |
  1. If Type(item) is Object and item has an [[InitializedTemporalDuration]] internal slot, then
  a. Return ? CreateTemporalDuration(item.[[Years]], item.[[Months]], item.[[Weeks]], item.[[Days]], item.[[Hours]], item.[[Minutes]], item.[[Seconds]], item.[[Milliseconds]], item.[[Microseconds]], item.[[Nanoseconds]]).
  2. Return ? ToTemporalDuration(item).
features: [Temporal]
---*/
assert.throws(RangeError, () => Temporal.Duration.from("P2H"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("P2.5M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("P2,5M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("P2S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2.H3M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2,H3M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2.H3S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2,H3S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2.H0.5M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2,H0,5M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2.H0.5S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2,H0,5S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2H3.2M3S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2H3,2M3S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2H3.2M0.3S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT2H3,2M0,3S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT.1H"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT,1H"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT.1M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT,1M"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT.1S"),
    "Invalid time value");
assert.throws(RangeError, () => Temporal.Duration.from("PT,1S"),
    "Invalid time value");
