// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.with
description: Temporal.Duration.prototype.with will return correctly "merged" object.
info: |
  1. Let duration be the this value.
  2. Perform ? RequireInternalSlot(duration, [[InitializedTemporalDuration]]).
  3. Let temporalDurationLike be ? ToPartialDuration(temporalDurationLike).
  4. If temporalDurationLike.[[Years]] is not undefined, then
    a. Let years be temporalDurationLike.[[Years]].
  5. Else,
    a. Let years be duration.[[Years]].
  6. If temporalDurationLike.[[Months]] is not undefined, then
    a. Let months be temporalDurationLike.[[Months]].
  7. Else,
    a. Let months be duration.[[Months]].
  8. If temporalDurationLike.[[Weeks]] is not undefined, then
    a. Let weeks be temporalDurationLike.[[Weeks]].
  9. Else,
    a. Let weeks be duration.[[Weeks]].
  10. If temporalDurationLike.[[Days]] is not undefined, then
    a. Let days be temporalDurationLike.[[Days]].
  11. Else,
    a. Let days be duration.[[Days]].
  12. If temporalDurationLike.[[Hours]] is not undefined, then
    a. Let hours be temporalDurationLike.[[Hours]].
  13. Else,
    a. Let hours be duration.[[Hours]].
  14. If temporalDurationLike.[[Minutes]] is not undefined, then
    a. Let minutes be temporalDurationLike.[[Minutes]].
  15. Else,
    a. Let minutes be duration.[[Minutes]].
  16. If temporalDurationLike.[[Seconds]] is not undefined, then
    a. Let seconds be temporalDurationLike.[[Seconds]].
  17. Else,
    a. Let seconds be duration.[[Seconds]].
  18. If temporalDurationLike.[[Milliseconds]] is not undefined, then
    a. Let milliseconds be temporalDurationLike.[[Milliseconds]].
  19. Else,
    a. Let milliseconds be duration.[[Milliseconds]].
  20. If temporalDurationLike.[[Microseconds]] is not undefined, then
    a. Let microseconds be temporalDurationLike.[[Microseconds]].
  21. Else,
    a. Let microseconds be duration.[[Microseconds]].
  22. If temporalDurationLike.[[Nanoseconds]] is not undefined, then
    a. Let nanoseconds be temporalDurationLike.[[Nanoseconds]].
  23. Else,
    a. Let nanoseconds be duration.[[Nanoseconds]].
  24. Return ? CreateTemporalDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds).
features: [Temporal]
---*/
function assertDuration(duration, years, months, weeks, days, hours,
    minutes, seconds, milliseconds, microseconds, nanoseconds, sign, blank) {
  assert.sameValue(years, duration.years, duration);
  assert.sameValue(months, duration.months, duration);
  assert.sameValue(weeks, duration.weeks, duration);
  assert.sameValue(days, duration.days, duration);
  assert.sameValue(hours, duration.hours, duration);
  assert.sameValue(minutes, duration.minutes, duration);
  assert.sameValue(seconds, duration.seconds, duration);
  assert.sameValue(milliseconds, duration.milliseconds, duration);
  assert.sameValue(microseconds, duration.microseconds, duration);
  assert.sameValue(nanoseconds, duration.nanoseconds, duration);
  assert.sameValue(sign, duration.sign, duration);
  assert.sameValue(blank, duration.blank, duration);
}
let like1 = {years:9, months:8, weeks:7, days:6, hours: 5, minutes: 4,
  seconds: 3, milliseconds: 2, microseconds: 1, nanoseconds: 10};
let like2 = {years: 9, hours:5};
let like3 = {months: 8, minutes:4};
let like4 = {weeks: 7, seconds:3};
let like5 = {days: 6, milliseconds:2};
let like6 = {microseconds: 987, nanoseconds: 123};
let like7 = {years:-9, months:-8, weeks:-7, days:-6, hours: -5, minutes: -4,
  seconds: -3, milliseconds: -2, microseconds: -1, nanoseconds: -10};

let d1 = new Temporal.Duration();
assertDuration(d1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true);
assertDuration(d1.with(like1), 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 1, false);
assertDuration(d1.with(like2), 9, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1, false);
assertDuration(d1.with(like3), 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 1, false);
assertDuration(d1.with(like4), 0, 0, 7, 0, 0, 0, 3, 0, 0, 0, 1, false);
assertDuration(d1.with(like5), 0, 0, 0, 6, 0, 0, 0, 2, 0, 0, 1, false);
assertDuration(d1.with(like6), 0, 0, 0, 0, 0, 0, 0, 0, 987, 123, 1, false);
assertDuration(d1.with(like7), -9, -8, -7, -6, -5, -4, -3, -2, -1, -10, -1,
    false);

let d2 = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
assertDuration(d2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, false);
assertDuration(d2.with(like1), 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 1, false);
assertDuration(d2.with(like7), -9, -8, -7, -6, -5, -4, -3, -2, -1, -10, -1,
    false);

// Test large number
let d3 = new Temporal.Duration(1e5, 2e5, 3e5, 4e5, 5e5, 6e5, 7e5, 8e5, 9e5,
    10e5);
assertDuration(d3, 1e5, 2e5, 3e5, 4e5, 5e5, 6e5, 7e5, 8e5, 9e5, 10e5, 1,
    false);
assertDuration(d3.with(like1), 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 1, false);
assertDuration(d3.with(like7), -9, -8, -7, -6, -5, -4, -3, -2, -1, -10, -1,
    false);

// Test negative values
let d4 = new Temporal.Duration(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10);
assertDuration(d4, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1, false);
assertDuration(d4.with(like1), 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 1, false);
