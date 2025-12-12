// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: RangeError should not be thrown when subtracting positive duration and end of month is out of range
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Based on a test case by André Bargull <andre.bargull@gmail.com>

const duration = new Temporal.Duration(0, 0, 0, 1);

// Calendar subtraction result is not out of range
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(275760, 9).subtract(duration), 275760, 9, "M09", "subtractig 1 month from 275760-09");
