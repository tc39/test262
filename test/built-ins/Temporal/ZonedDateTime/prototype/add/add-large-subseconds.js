// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Adding unbalanced durations with large subsecond values to a datetime
features: [Temporal]
---*/

// const pdt1 = new Temporal.PlainDateTime(2020, 2, 29, 0, 57, 27, 747, 612, 578);
const zdt1 = new Temporal.ZonedDateTime(1582966647747612578n, "America/Los_Angeles");

assert.sameValue(zdt1.add(Temporal.Duration.from({nanoseconds: Number.MAX_SAFE_INTEGER})).epochNanoseconds,
                 1591973847002353569n);
assert.sameValue(zdt1.add(Temporal.Duration.from({nanoseconds: Number.MIN_SAFE_INTEGER})).epochNanoseconds,
                 1573959448492871587n);

assert.sameValue(zdt1.add(Temporal.Duration.from({microseconds: Number.MAX_SAFE_INTEGER})).epochNanoseconds,
                 10590165902488603578n);
assert.sameValue(zdt1.add(Temporal.Duration.from({microseconds: Number.MIN_SAFE_INTEGER})).epochNanoseconds,
                 -7424232606993378422n);

assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({milliseconds: Number.MAX_SAFE_INTEGER})));
assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({milliseconds: Number.MIN_SAFE_INTEGER})));

assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER})));
assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({seconds: Number.MIN_SAFE_INTEGER})));

const bigNumber = 9007199254740990976;

assert.sameValue(zdt1.add(Temporal.Duration.from({nanoseconds: bigNumber})).epochNanoseconds,
                 10590165902488603554n);
assert.sameValue(zdt1.add(Temporal.Duration.from({nanoseconds: -bigNumber})).epochNanoseconds,
                 -7424232606993378398n);

assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({milliseconds: bigNumber})));
assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({milliseconds: -bigNumber})));

assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({microseconds: bigNumber})));
assert.throws(RangeError, () => zdt1.add(Temporal.Duration.from({microseconds: -bigNumber})));

const zdt2 = new Temporal.ZonedDateTime(0n, "UTC");

assert.sameValue(zdt2.add(Temporal.Duration.from({nanoseconds: bigNumber})).epochNanoseconds,
                 9007199254740990976n);
assert.sameValue(zdt2.add(Temporal.Duration.from({nanoseconds: -bigNumber})).epochNanoseconds,
                 -9007199254740990976n);

assert.throws(RangeError, () => zdt2.add(Temporal.Duration.from({milliseconds: bigNumber})));
assert.throws(RangeError, () => zdt2.add(Temporal.Duration.from({milliseconds: -bigNumber})));

assert.throws(RangeError, () => zdt2.add(Temporal.Duration.from({microseconds: bigNumber})));
assert.throws(RangeError, () => zdt2.add(Temporal.Duration.from({microseconds: -bigNumber})));
