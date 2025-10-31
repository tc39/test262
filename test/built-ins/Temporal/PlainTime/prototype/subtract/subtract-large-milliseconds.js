// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.subtract
description: Subtracting unbalanced durations with large subsecond values from a time
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const t = new Temporal.PlainTime(0);
const bigNumber = 9007199254740990976;
TemporalHelpers.assertPlainTime(t.subtract(Temporal.Duration.from({milliseconds: bigNumber})),
                                16, 23, 29, 24, 0, 0);
TemporalHelpers.assertPlainTime(t.subtract(Temporal.Duration.from({milliseconds: -bigNumber})),
                                7, 36, 30, 976, 0, 0);

TemporalHelpers.assertPlainTime(t.subtract(Temporal.Duration.from({microseconds: bigNumber})),
                                15, 0, 59, 9, 24, 0);
TemporalHelpers.assertPlainTime(t.subtract(Temporal.Duration.from({microseconds: -bigNumber})),
                                8, 59, 0, 990, 976, 0);

TemporalHelpers.assertPlainTime(t.subtract(Temporal.Duration.from({nanoseconds: bigNumber})),
                                0, 12, 25, 259, 9, 24);
TemporalHelpers.assertPlainTime(t.subtract(Temporal.Duration.from({nanoseconds: -bigNumber})),
                                23, 47, 34, 740, 990, 976);

