// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear will take Temporal.PlainYearMonth object
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

assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(1995, 7)));
assert.sameValue(true, cal.inLeapYear(new Temporal.PlainYearMonth(1996, 2)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(1997, 1)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(1998, 7)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(1999, 7)));
assert.sameValue(true, cal.inLeapYear(new Temporal.PlainYearMonth(2000, 12)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(2001, 3)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(2002, 7)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(2003, 12)));
assert.sameValue(true, cal.inLeapYear(new Temporal.PlainYearMonth(2004, 7)));
assert.sameValue(false, cal.inLeapYear(new Temporal.PlainYearMonth(2005, 1)));
