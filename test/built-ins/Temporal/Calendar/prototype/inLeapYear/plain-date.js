// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear will take Temporal.PlainDate object
  and return true or false that year is leap year.
  and return Array of the same content.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
  a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return ! IsISOLeapYear(temporalDateLike.[[ISOYear]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(1995, 7, 15)));
assert.sameValue(true, cal.inLeapYear(new Temporal.PlainDate(1996, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(1997, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(1998, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(1999, 7, 15)));
assert.sameValue(true, cal.inLeapYear(new Temporal.PlainDate(2000, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(2001, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(2002, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(2003, 7, 15)));
assert.sameValue(true, cal.inLeapYear(new Temporal.PlainDate(2004, 7, 15)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainDate(2005, 7, 15)));
