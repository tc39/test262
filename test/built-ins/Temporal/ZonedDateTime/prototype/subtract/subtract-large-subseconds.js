// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: Subtracting unbalanced durations with large subsecond values from a date
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// const pdt = new Temporal.PlainDateTime(2020, 2, 29, 0, 57, 27, 747, 612, 578);
const zdt = new Temporal.ZonedDateTime(1582966647747612578n, "America/Los_Angeles");

TemporalHelpers.assertZonedDateTimesEqual(zdt.subtract(Temporal.Duration.from({nanoseconds: Number.MAX_SAFE_INTEGER})),
                                          new Temporal.ZonedDateTime(1573959448492871587n, "America/Los_Angeles"));
TemporalHelpers.assertZonedDateTimesEqual(zdt.subtract(Temporal.Duration.from({microseconds: Number.MAX_SAFE_INTEGER})),
                                          new Temporal.ZonedDateTime(-7424232606993378422n, "America/Los_Angeles"));
assert.throws(RangeError, () => zdt.subtract(Temporal.Duration.from({milliseconds: Number.MAX_SAFE_INTEGER})));
assert.throws(RangeError, () => zdt.subtract(Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER})));

