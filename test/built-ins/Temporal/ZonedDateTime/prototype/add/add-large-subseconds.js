// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Adding unbalanced durations with large subsecond values to a date
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// const pdt = new Temporal.PlainDateTime(2020, 2, 29, 0, 57, 27, 747, 612, 578);
const zdt = new Temporal.ZonedDateTime(1582966647747612578n, "America/Los_Angeles");

TemporalHelpers.assertZonedDateTimesEqual(zdt.add(Temporal.Duration.from({nanoseconds: Number.MAX_SAFE_INTEGER})),
                                          new Temporal.ZonedDateTime(1591973847002353569n, "America/Los_Angeles"));
TemporalHelpers.assertZonedDateTimesEqual(zdt.add(Temporal.Duration.from({microseconds: Number.MAX_SAFE_INTEGER})),
                                          new Temporal.ZonedDateTime(10590165902488603578n, "America/Los_Angeles"));
assert.throws(RangeError, () => zdt.add(Temporal.Duration.from({milliseconds: Number.MAX_SAFE_INTEGER})));
assert.throws(RangeError, () => zdt.add(Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER})));

