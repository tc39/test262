// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.prototype.from
description: Months and days must be non-negative integers
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.PlainMonthDay.from({
  year: 2021,
  month: -1,
  day: 17
}));
assert.throws(RangeError, () => Temporal.PlainMonthDay.from({
  year: 2021,
  month: -Infinity,
  day: 17
}));
assert.throws(RangeError, () => Temporal.PlainMonthDay.from({
  year: 2021,
  month: 7,
  day: -17
}));
assert.throws(RangeError, () => Temporal.PlainMonthDay.from({
  year: 2021,
  month: 7,
  day: -Infinity
}));

