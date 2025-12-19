// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: RangeError should not be thrown when adding negative duration and end of month is out of range
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Based on a test case by André Bargull <andre.bargull@gmail.com>

const duration = new Temporal.Duration(0, 0, 0, -1);

// Calendar addition result is not out of range
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(275760, 9).add(duration), 275760, 9, "M09", "adding 1 month to 275760-09");
