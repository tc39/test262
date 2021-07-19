// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.with
description: Temporal.Duration.prototype.with will throw RangeError if the value is out of range.
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
let dPos = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Different sign
assert.throws(RangeError, ()=> dPos.with({years: -1}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({months: -2}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({weeks: -3}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({days: -4}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({hours: -5}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({minutes: -6}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({seconds: -7}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({milliseconds: -8}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({microseconds: -9}),
    "Invalid time value");
assert.throws(RangeError, ()=> dPos.with({nanoseconds: -10}),
    "Invalid time value");

// Test negative values
let dNeg = new Temporal.Duration(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10);
// Throw when sign flip
assert.throws(RangeError, ()=> dNeg.with({years: 1}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({months: 2}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({weeks: 3}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({days: 4}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({hours: 5}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({minutes: 6}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({seconds: 7}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({milliseconds: 8}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({microseconds: 9}),
    "Invalid time value");
assert.throws(RangeError, ()=> dNeg.with({nanoseconds: 10}),
    "Invalid time value");
