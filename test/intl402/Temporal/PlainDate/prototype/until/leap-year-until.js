// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.until
description: Subtracting a date in a leap year from a date in a common year should work
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = 'hebrew';
const a = new Temporal.PlainDate(1967, 2, 28, calendar);
const b = new Temporal.PlainDate(1968, 3, 1, calendar);
TemporalHelpers.assertDuration(a.until(b, { largestUnit: 'years' }),
  0, 12, 0, 13, 0, 0, 0, 0, 0, 0);

