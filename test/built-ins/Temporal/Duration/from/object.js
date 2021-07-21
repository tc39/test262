// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.from
description: Temporal.Duration.from will crate a Duration from an object which have all the fields.
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

assertDuration(Temporal.Duration.from(
    {years: 0, months: 0, weeks: 0, days: 0,
      hours: 0, minutes: 0, seconds: 0,
    milliseconds: 0, microseconds: 0, nanoseconds:0}),
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true);

assertDuration(Temporal.Duration.from(
    {years: 1, months: 2, weeks: 3, days: 4,
      hours: 5, minutes: 6, seconds: 7,
    milliseconds: 8, microseconds: 9, nanoseconds:10}),
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, false);

assertDuration(Temporal.Duration.from(
    {years: -1, months: -2, weeks: -3, days: -4,
      hours: -5, minutes: -6, seconds: -7,
    milliseconds: -8, microseconds: -9, nanoseconds:-10}),
    -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1, false);
