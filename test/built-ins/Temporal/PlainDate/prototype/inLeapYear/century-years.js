// Copyright (C) 2026 Rudi Theunissen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindate.prototype.inleapyear
description: Century years follow the 100/400 rule
info: |
  A year divisible by 100 is not a leap year, unless it is also divisible
  by 400. This exercises the centennial and quadricentennial branches of
  the leap year algorithm, which the basic test does not cover (except for
  the year 2000).
features: [Temporal]
---*/

// Divisible by 400: leap year
assert.sameValue(new Temporal.PlainDate(1600, 6, 1).inLeapYear, true, "1600 is a leap year (divisible by 400)");
assert.sameValue(new Temporal.PlainDate(2000, 6, 1).inLeapYear, true, "2000 is a leap year (divisible by 400)");
assert.sameValue(new Temporal.PlainDate(2400, 6, 1).inLeapYear, true, "2400 is a leap year (divisible by 400)");

// Divisible by 100 but not 400: not a leap year
assert.sameValue(new Temporal.PlainDate(1700, 6, 1).inLeapYear, false, "1700 is not a leap year (divisible by 100, not 400)");
assert.sameValue(new Temporal.PlainDate(1800, 6, 1).inLeapYear, false, "1800 is not a leap year (divisible by 100, not 400)");
assert.sameValue(new Temporal.PlainDate(1900, 6, 1).inLeapYear, false, "1900 is not a leap year (divisible by 100, not 400)");
assert.sameValue(new Temporal.PlainDate(2100, 6, 1).inLeapYear, false, "2100 is not a leap year (divisible by 100, not 400)");
assert.sameValue(new Temporal.PlainDate(2200, 6, 1).inLeapYear, false, "2200 is not a leap year (divisible by 100, not 400)");
