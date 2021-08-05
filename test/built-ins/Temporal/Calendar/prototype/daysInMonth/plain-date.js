// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.daysinmonth
description: Temporal.Calendar.prototype.daysInMonth will take Temporal.PlainDate object
  and return the number of days in that month.
info: |
  5. Return 𝔽(! ISODaysInMonth(temporalDateLike.[[ISOYear]], temporalDateLike.[[ISOMonth]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let d = new Temporal.PlainDate(2021, 1, 15);
assert.sameValue(31, cal.daysInMonth(d));

// non-leap year
d = new Temporal.PlainDate(2021, 2, 15);
assert.sameValue(28, cal.daysInMonth(d));

// leap year
d = new Temporal.PlainDate(2020, 2, 15);
assert.sameValue(29, cal.daysInMonth(d));
d = new Temporal.PlainDate(2000, 2, 15);
assert.sameValue(29, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 3, 15);
assert.sameValue(31, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 4, 15);
assert.sameValue(30, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 5, 15);
assert.sameValue(31, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 6, 15);
assert.sameValue(30, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 7, 15);
assert.sameValue(31, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 8, 15);
assert.sameValue(31, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 9, 15);
assert.sameValue(30, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 10, 15);
assert.sameValue(31, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 11, 15);
assert.sameValue(30, cal.daysInMonth(d));

d = new Temporal.PlainDate(2021, 12, 15);
assert.sameValue(31, cal.daysInMonth(d));
