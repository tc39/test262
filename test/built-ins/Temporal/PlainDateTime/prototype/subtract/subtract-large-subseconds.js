// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: Subtracting unbalanced durations with large subsecond values from a date
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const pdt = new Temporal.PlainDateTime(2020, 2, 29, 0, 57, 27, 747, 612, 578);
TemporalHelpers.assertPlainDateTime(pdt.subtract(Temporal.Duration.from({nanoseconds: Number.MAX_SAFE_INTEGER})),
                                    2019, 11, "M11", 16, 18, 57, 28, 492, 871, 587);
TemporalHelpers.assertPlainDateTime(pdt.subtract(Temporal.Duration.from({microseconds: Number.MAX_SAFE_INTEGER})),
                                    1734, 9, "M09", 26, 1, 9, 53, 6, 621, 578);
assert.throws(RangeError, () => pdt.subtract(Temporal.Duration.from({milliseconds: Number.MAX_SAFE_INTEGER})));
assert.throws(RangeError, () => pdt.subtract(Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER})));

