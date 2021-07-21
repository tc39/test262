// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.from
description: Temporal.Duration.from will create a Duration from an ISO8601 stirng.
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

assertDuration(Temporal.Duration.from("PT0S"),
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true);
assertDuration(Temporal.Duration.from("P1Y"),
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P2M"),
    0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P3W"),
    0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P4D"),
    0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT5H"),
    0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT6M"),
    0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT7S"),
    0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT0.008S"),
    0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT0.000009S"),
    0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, false);
assertDuration(Temporal.Duration.from("PT0.000000001S"),
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("P1Y2M3W4DT5H6M7.008009001S"),
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, false);
assertDuration(Temporal.Duration.from(
    "P111111111Y222222222M333333333W444444444D" +
    "T555555555H666666666M777777777.987654321S"),
    111111111, 222222222, 333333333, 444444444,
    555555555, 666666666, 777777777, 987, 654, 321, 1, false);

assertDuration(Temporal.Duration.from("P1Y3WT5H7.000009001S"),
    1, 0, 3, 0, 5, 0, 7, 0, 9, 1, 1, false);
assertDuration(Temporal.Duration.from("P2M4DT6M0.008000001S"),
    0, 2, 0, 4, 0, 6, 0, 8, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("P1Y4DT7.000000001S"),
    1, 0, 0, 4, 0, 0, 7, 0, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("P2MT5H0.008S"),
    0, 2, 0, 0, 5, 0, 0, 8, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P3WT6M0.000009S"),
    0, 0, 3, 0, 0, 6, 0, 0, 9, 0, 1, false);
assertDuration(Temporal.Duration.from("P1YT5H0.000009000S"),
    1, 0, 0, 0, 5, 0, 0, 0, 9, 0, 1, false);
assertDuration(Temporal.Duration.from("P2MT6M0.000000001S"),
    0, 2, 0, 0, 0, 6, 0, 0, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("P3WT7S"),
    0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P4DT0.008S"),
    0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P1YT5H0.000000001S"),
    1, 0, 0, 0, 5, 0, 0, 0, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("P2MT6M"),
    0, 2, 0, 0, 0, 6, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P3WT7S"),
    0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P4DT0.008S"),
    0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT5H0.000009S"),
    0, 0, 0, 0, 5, 0, 0, 0, 9, 0, 1, false);
assertDuration(Temporal.Duration.from("P1YT6M"),
    1, 0, 0, 0, 0, 6, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P2MT7S"),
    0, 2, 0, 0, 0, 0, 7, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P3WT0.008S"),
    0, 0, 3, 0, 0, 0, 0, 8, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P4DT0.000009S"),
    0, 0, 0, 4, 0, 0, 0, 0, 9, 0, 1, false);
assertDuration(Temporal.Duration.from("PT5H0.000000001S"),
    0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("P1YT7S"),
    1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P2MT0.008S"),
    0, 2, 0, 0, 0, 0, 0, 8, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("P3WT0.000009S"),
    0, 0, 3, 0, 0, 0, 0, 0, 9, 0, 1, false);
assertDuration(Temporal.Duration.from("P4DT0.000000001S"),
    0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, false);
assertDuration(Temporal.Duration.from("PT5H"),
    0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1, false);

assertDuration(Temporal.Duration.from("-P1Y2M3W4DT5H6M7.008009001S"),
    -1, -2, -3, -4, -5, -6, -7, -8, -9, -1, -1, false);
assertDuration(Temporal.Duration.from(
    "-P111111111Y222222222M333333333W444444444D" +
    "T555555555H666666666M777777777.987654321S"),
    -111111111, -222222222, -333333333, -444444444,
    -555555555, -666666666, -777777777, -987, -654, -321, -1, false);
// \\u2212
assertDuration(Temporal.Duration.from("\u2212P1Y2M3W4DT5H6M7.008009001S"),
    -1, -2, -3, -4, -5, -6, -7, -8, -9, -1, -1, false);
// positive sign
assertDuration(Temporal.Duration.from("+P1Y2M3W4DT5H6M7.008009001S"),
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, false);

assertDuration(Temporal.Duration.from("PT2.5H"),
    0, 0, 0, 0, 2, 30, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2.25H"),
    0, 0, 0, 0, 2, 15, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2.05H"),
    0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2.005H"),
    0, 0, 0, 0, 2, 0, 18, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2.505H"),
    0, 0, 0, 0, 2, 30, 18, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2.0025H"),
    0, 0, 0, 0, 2, 0, 9, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.5M"),
    0, 0, 0, 0, 0, 3, 30, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.25M"),
    0, 0, 0, 0, 0, 3, 15, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.125M"),
    0, 0, 0, 0, 0, 3, 7, 500, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.025M"),
    0, 0, 0, 0, 0, 3, 1, 500, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.01M"),
    0, 0, 0, 0, 0, 3, 0, 600, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.005M"),
    0, 0, 0, 0, 0, 3, 0, 300, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.001M"),
    0, 0, 0, 0, 0, 3, 0, 60, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3.006M"),
    0, 0, 0, 0, 0, 3, 0, 360, 0, 0, 1, false);

// Use , instead of .
assertDuration(Temporal.Duration.from("PT2,5H"),
    0, 0, 0, 0, 2, 30, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2,25H"),
    0, 0, 0, 0, 2, 15, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2,05H"),
    0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2,005H"),
    0, 0, 0, 0, 2, 0, 18, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2,505H"),
    0, 0, 0, 0, 2, 30, 18, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT2,0025H"),
    0, 0, 0, 0, 2, 0, 9, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,5M"),
    0, 0, 0, 0, 0, 3, 30, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,25M"),
    0, 0, 0, 0, 0, 3, 15, 0, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,125M"),
    0, 0, 0, 0, 0, 3, 7, 500, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,025M"),
    0, 0, 0, 0, 0, 3, 1, 500, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,01M"),
    0, 0, 0, 0, 0, 3, 0, 600, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,005M"),
    0, 0, 0, 0, 0, 3, 0, 300, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,001M"),
    0, 0, 0, 0, 0, 3, 0, 60, 0, 0, 1, false);
assertDuration(Temporal.Duration.from("PT3,006M"),
    0, 0, 0, 0, 0, 3, 0, 360, 0, 0, 1, false);
