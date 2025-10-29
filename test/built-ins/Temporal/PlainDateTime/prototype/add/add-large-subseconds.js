// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.add
description: Adding unbalanced durations with large subsecond values to a date
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const pdt = new Temporal.PlainDateTime(2020, 2, 29, 0, 57, 27, 747, 612, 578);
TemporalHelpers.assertPlainDateTime(pdt.add(Temporal.Duration.from({nanoseconds: Number.MAX_SAFE_INTEGER})),
                                    2020, 6, "M06", 12, 6, 57, 27, 2, 353, 569);
TemporalHelpers.assertPlainDateTime(pdt.add(Temporal.Duration.from({microseconds: Number.MAX_SAFE_INTEGER})),
                                   2305, 8, "M08", 4, 0, 45, 2, 488, 603, 578);
assert.throws(RangeError, () => pdt.add(Temporal.Duration.from({milliseconds: Number.MAX_SAFE_INTEGER})));
assert.throws(RangeError, () => pdt.add(Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER})));

