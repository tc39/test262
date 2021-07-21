// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.from
description: Temporal.Duration.from will create a Duration from a given Duration.
info: |
  1. If Type(item) is Object and item has an [[InitializedTemporalDuration]] internal slot, then
  a. Return ? CreateTemporalDuration(item.[[Years]], item.[[Months]], item.[[Weeks]], item.[[Days]], item.[[Hours]], item.[[Minutes]], item.[[Seconds]], item.[[Milliseconds]], item.[[Microseconds]], item.[[Nanoseconds]]).
  2. Return ? ToTemporalDuration(item).
features: [Temporal]
---*/
function assertDuration(duration, years, months, weeks, days, hours,
    minutes, seconds, milliseconds, microseconds, nanoseconds, sign, blank) {
  assert.sameValue(years, duration.years, "years");
  assert.sameValue(months, duration.months, "months");
  assert.sameValue(weeks, duration.weeks, "weeks");
  assert.sameValue(days, duration.days, "days");
  assert.sameValue(hours, duration.hours, "hours");
  assert.sameValue(minutes, duration.minutes, "minutes");
  assert.sameValue(seconds, duration.seconds, "seconds");
  assert.sameValue(milliseconds, duration.milliseconds, "milliseconds");
  assert.sameValue(microseconds, duration.microseconds, "microseconds");
  assert.sameValue(nanoseconds, duration.nanoseconds, "nanoseconds");
  assert.sameValue(sign, duration.sign, "sign");
  assert.sameValue(blank, duration.blank, "blank");
}
let d1 = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
assertDuration(d1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, false);
let d2 = Temporal.Duration.from(d1);
assertDuration(d2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, false);
assert.notSameValue(d1, d2);
