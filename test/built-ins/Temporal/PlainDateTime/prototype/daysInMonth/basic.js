// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindatetime.prototype.daysinmonth
description: Checking days in month for a "normal" case (non-undefined, non-boundary case, etc.)
features: [Temporal]
---*/

const tests = [
  [new Temporal.PlainDateTime(1976, 2, 18, 15, 23, 30, 123, 456, 789), 29],
  [new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789), 30],
  [new Temporal.PlainDateTime(1976, 12, 18, 15, 23, 30, 123, 456, 789), 31],
  [new Temporal.PlainDateTime(1977, 2, 18, 15, 23, 30, 123, 456, 789), 28],
];
for (const [plainDateTime, expected] of tests) {
  assert.sameValue(plainDateTime.daysInMonth, expected, `${expected} days in the month of ${plainDateTime}`);
}

assert.sameValue((new Temporal.PlainDateTime(1997, 1, 23, 5, 30, 13)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDateTime(1996, 2, 23, 5, 30, 13)).daysInMonth, 29);
assert.sameValue((new Temporal.PlainDateTime(2000, 2, 23, 5, 30, 13)).daysInMonth, 29);
assert.sameValue((new Temporal.PlainDateTime(1997, 2, 23, 5, 30, 13)).daysInMonth, 28);
assert.sameValue((new Temporal.PlainDateTime(1997, 3, 23, 5, 30, 13)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDateTime(1997, 4, 23, 5, 30, 13)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDateTime(1997, 5, 23, 5, 30, 13)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDateTime(1997, 6, 23, 5, 30, 13)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDateTime(1997, 7, 23, 5, 30, 13)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDateTime(1997, 9, 23, 5, 30, 13)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDateTime(1997, 10, 23, 5, 30, 13)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDateTime(1997, 11, 23, 5, 30, 13)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDateTime(1997, 12, 23, 5, 30, 13)).daysInMonth, 31);
