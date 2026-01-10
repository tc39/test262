// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: RangeError should not be thrown when adding negative duration and end of month is out of range
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Based on a test case by André Bargull <andre.bargull@gmail.com>

const oneDay = new Temporal.Duration(0, 0, 0, 1);
const twoWeeks = new Temporal.Duration(0, 0, 2, 0);

// Calendar addition result is not out of range
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(275760, 9).add(oneDay), 275760, 9, "M09", "adding 1 day to 275760-09");

// Calendar addition result is out of range
assert.throws(RangeError, () => new Temporal.PlainYearMonth(275760, 9).add(twoWeeks), "adding 2 weeks to 275760-09 is out of range");

