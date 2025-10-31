// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: Subtracting unbalanced durations with large subsecond values from a datetime
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const t = new Temporal.PlainDateTime(0, 1, 1);
const bigNumber = 9007199254740990976;
assert.throws(RangeError, () => t.subtract(Temporal.Duration.from({milliseconds: bigNumber})));
assert.throws(RangeError, () => t.subtract(Temporal.Duration.from({milliseconds: -bigNumber})));
assert.throws(RangeError, () => t.subtract(Temporal.Duration.from({microseconds: bigNumber})));
assert.throws(RangeError, () => t.subtract(Temporal.Duration.from({microseconds: -bigNumber})));

TemporalHelpers.assertPlainDateTime(t.subtract(Temporal.Duration.from({nanoseconds: bigNumber})),
                                    -286, 7, "M07", 29, 0, 12, 25, 259, 9, 24);
TemporalHelpers.assertPlainDateTime(t.subtract(Temporal.Duration.from({nanoseconds: -bigNumber})),
                                    285, 6, "M06", 4, 23, 47, 34, 740, 990, 976);
