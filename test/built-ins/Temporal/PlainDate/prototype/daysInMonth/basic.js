// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindate.prototype.daysinmonth
description: Checking days in month for a "normal" case (non-undefined, non-boundary case, etc.)
features: [Temporal]
---*/

const tests = [
  [new Temporal.PlainDate(1976, 2, 18), 29],
  [new Temporal.PlainDate(1976, 11, 18), 30],
  [new Temporal.PlainDate(1976, 12, 18), 31],
  [new Temporal.PlainDate(1977, 2, 18), 28],
];
for (const [plainDate, expected] of tests) {
  assert.sameValue(plainDate.daysInMonth, expected, `${expected} days in the month of ${plainDate}`);
}

assert.sameValue((new Temporal.PlainDate(2021, 1, 15)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDate(2020, 2, 15)).daysInMonth, 29);
assert.sameValue((new Temporal.PlainDate(2000, 2, 15)).daysInMonth, 29);
assert.sameValue((new Temporal.PlainDate(2021, 2, 15)).daysInMonth, 28);
assert.sameValue((new Temporal.PlainDate(2021, 3, 15)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDate(2021, 4, 15)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDate(2021, 5, 15)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDate(2021, 6, 15)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDate(2021, 7, 15)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDate(2021, 8, 15)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDate(2021, 9, 15)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDate(2021, 10, 15)).daysInMonth, 31);
assert.sameValue((new Temporal.PlainDate(2021, 11, 15)).daysInMonth, 30);
assert.sameValue((new Temporal.PlainDate(2021, 12, 15)).daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2019-01-18').daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2020-02-18').daysInMonth, 29);
assert.sameValue(Temporal.PlainDate.from('2019-02-18').daysInMonth, 28);
assert.sameValue(Temporal.PlainDate.from('2019-03-18').daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2019-04-18').daysInMonth, 30);
assert.sameValue(Temporal.PlainDate.from('2019-05-18').daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2019-06-18').daysInMonth, 30);
assert.sameValue(Temporal.PlainDate.from('2019-07-18').daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2019-08-18').daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2019-09-18').daysInMonth, 30);
assert.sameValue(Temporal.PlainDate.from('2019-10-18').daysInMonth, 31);
assert.sameValue(Temporal.PlainDate.from('2019-11-18').daysInMonth, 30);
assert.sameValue(Temporal.PlainDate.from('2019-12-18').daysInMonth, 31);
