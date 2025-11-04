// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.since
description: Subtracting a date in a leap year from a date in a common year should work
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = 'chinese';
const a = new Temporal.PlainDate(2016, 7, 31, calendar);
const b = new Temporal.PlainDate(2017, 7, 31, calendar);
TemporalHelpers.assertDuration(b.since(a, { largestUnit: 'years' }),
  0, 12, 0, 11, 0, 0, 0, 0, 0, 0);
