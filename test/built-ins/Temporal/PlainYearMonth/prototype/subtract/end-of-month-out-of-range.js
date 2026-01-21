// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: RangeError should be thrown when subtracting positive duration and end of month is out of range
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Based on a test case by André Bargull <andre.bargull@gmail.com>

const oneDay = new Temporal.Duration(0, 0, 0, 1);
const twoWeeks = new Temporal.Duration(0, 0, 2, 0);

// Calendar subtraction result is out of range
assert.throws(RangeError, () => new Temporal.PlainYearMonth(275760, 9).subtract(oneDay), "subtracting 1 day from 275760-09 is out of range");

// Calendar subtraction result is out of range
assert.throws(RangeError, () => new Temporal.PlainYearMonth(275760, 9).subtract(twoWeeks), "subtracting 2 weeks from 275760-09 is out of range");
