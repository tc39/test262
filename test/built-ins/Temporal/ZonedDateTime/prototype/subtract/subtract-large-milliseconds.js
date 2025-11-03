// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Subtracting unbalanced durations with large subsecond values from a datetime
features: [Temporal]
---*/

const z = new Temporal.ZonedDateTime(0n, "UTC");
const bigNumber = 9007199254740990976;
assert.throws(RangeError, () => z.add(Temporal.Duration.from({milliseconds: bigNumber})));
assert.throws(RangeError, () => z.add(Temporal.Duration.from({milliseconds: -bigNumber})));
assert.throws(RangeError, () => z.add(Temporal.Duration.from({microseconds: bigNumber})));
assert.throws(RangeError, () => z.add(Temporal.Duration.from({microseconds: -bigNumber})));

assert.sameValue(z.subtract(Temporal.Duration.from({nanoseconds: bigNumber})).epochNanoseconds,
                 -9007199254740990976n);
assert.sameValue(z.subtract(Temporal.Duration.from({nanoseconds: -bigNumber})).epochNanoseconds,
                 9007199254740990976n);
