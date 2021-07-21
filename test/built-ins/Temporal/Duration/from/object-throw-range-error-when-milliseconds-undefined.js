// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.from
description: Temporal.Duration.from will throw if milliseconds field is missing from the object.
info: |
  # Temporal.Duration.from ( item )
  2. Return ? ToTemporalDuration(item).
  # ToTemporalDuration ( item )
  1- b. Let result be ? ToTemporalDurationRecord(item).
  # ToTemporalDurationRecord ( temporalDurationLike )
  5. For each row of Table 7, except the header row, in table order, do
    b. Let val be ? Get(temporalDurationLike, prop).
    d. Let val be ? ToNumber(val).
    e. If floor(val) ≠ val, then
     i. Throw a RangeError exception.
  # ToNumber ( argument )
    Undefined Return NaN.
  and floor(NaN) ≠ val is true.
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.Duration.from(
    {years: 1, months: 2, weeks: 3, days: 4,
      hours: 5, minutes: 6, seconds: 7,
    /* milliseconds: 8, */ microseconds: 9, nanoseconds:10}),
    "milliseconds is undefined should throw RangeError");
