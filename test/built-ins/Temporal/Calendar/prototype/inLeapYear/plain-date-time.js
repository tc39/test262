// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear will take Temporal.PlainDateTime object
  and return true or false that year is leap year.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
    a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return ! IsISOLeapYear(temporalDateLike.[[ISOYear]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let dt = new Temporal.PlainDateTime(1995, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(1996, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), true);

dt = new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(1998, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(1999, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(2000, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), true);

dt = new Temporal.PlainDateTime(2001, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(2002, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(2003, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);

dt = new Temporal.PlainDateTime(2004, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), true);

dt = new Temporal.PlainDateTime(2005, 8, 23, 5, 30, 13);
assert.sameValue(cal.inLeapYear(dt), false);
