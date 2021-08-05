// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear will take Temporal.PlainDate object
  and return true or false that year is leap year.
info: |
  5. Return ! IsISOLeapYear(temporalDateLike.[[ISOYear]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let d = new Temporal.PlainDate(1995, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(1996, 7, 15);
assert.sameValue(cal.inLeapYear(d), true);

d = new Temporal.PlainDate(1997, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(1998, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(1999, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(2000, 7, 15);
assert.sameValue(cal.inLeapYear(d), true);

d = new Temporal.PlainDate(2001, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(2002, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(2003, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);

d = new Temporal.PlainDate(2004, 7, 15);
assert.sameValue(cal.inLeapYear(d), true);

d = new Temporal.PlainDate(2005, 7, 15);
assert.sameValue(cal.inLeapYear(d), false);
