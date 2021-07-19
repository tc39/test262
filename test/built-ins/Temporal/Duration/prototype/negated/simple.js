// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.negated
description: Temporal.Duration.prototype.negated will return negated value of the input duration.
info: |
  1. Let duration be the this value.
  2. Perform ? RequireInternalSlot(duration, [[InitializedTemporalDuration]]).
  3. Return ? CreateTemporalDuration(abs(duration.[[Years]]), abs(duration.[[Months]]), abs(duration.[[Weeks]]), abs(duration.[[Days]]), abs(duration.[[Hours]]), abs(duration.[[Minutes]]), abs(duration.[[Seconds]]), abs(duration.[[Milliseconds]]), abs(duration.[[Microseconds]]), abs(duration.[[Nanoseconds]])).
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
let d1 = new Temporal.Duration();
assertDuration(d1.negated(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true);

let d2 = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
assertDuration(d2.negated(), -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1, false);

// Test large number
let d3 = new Temporal.Duration(1e5, 2e5, 3e5, 4e5, 5e5, 6e5, 7e5, 8e5, 9e5, 10e5);
assertDuration(d3.negated(), -1e5, -2e5, -3e5, -4e5, -5e5, -6e5, -7e5, -8e5, -9e5, -10e5, -1, false);


// Test negative values
let d4 = new Temporal.Duration(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10);
assertDuration(d4.negated(), 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, false);

let d5 = new Temporal.Duration(-1e5, -2e5, -3e5, -4e5, -5e5, -6e5, -7e5, -8e5, -9e5, -10e5);
assertDuration(d5.negated(), 1e5, 2e5, 3e5, 4e5, 5e5, 6e5, 7e5, 8e5, 9e5, 10e5, 1, false);

let d6 = new Temporal.Duration(1, 0, 3, 0, 5, 0, 7, 0, 9, 0);
assertDuration(d6.negated(), -1, 0, -3, 0, -5, 0, -7, 0, -9, 0, -1, false);

let d7 = new Temporal.Duration(-1, 0, -3, 0, -5, 0, -7, 0, -9, 0);
assertDuration(d7.negated(), 1, 0, 3, 0, 5, 0, 7, 0, 9, 0, 1, false);

let d8 = new Temporal.Duration(0, -2, 0, -4, 0, -6, 0, -8, 0, -10);
assertDuration(d8.negated(), 0, 2, 0, 4, 0, 6, 0, 8, 0, 10, 1, false);
