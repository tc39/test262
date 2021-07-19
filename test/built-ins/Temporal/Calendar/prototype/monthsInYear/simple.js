// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthsinyear
description: Temporal.Calendar.prototype.monthsInYear will take Temporal.PlainDate,
  PlainYearMonth, PlainDateTime object or ISO8601 string and return the number 12 for ISO8601 calendar.
  and return Array of the same content.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
  a. Perform ? ToTemporalDate(temporalDateLike).
  5. Return 12𝔽.
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(12, cal.monthsInYear(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue(12, cal.monthsInYear(new Temporal.PlainDate(1234, 7, 15)));
assert.sameValue(12, cal.monthsInYear(new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)));
assert.sameValue(12, cal.monthsInYear(new Temporal.PlainDateTime(1234, 8, 23, 5, 30, 13)));
assert.sameValue(12, cal.monthsInYear(new Temporal.PlainYearMonth(1, 1)));
assert.sameValue(12, cal.monthsInYear(new Temporal.PlainYearMonth(9834, 12)));
assert.sameValue(12, cal.monthsInYear("3456-12-20"));
assert.sameValue(12, cal.monthsInYear("+000998-01-28"));
assert.sameValue(12, cal.monthsInYear("3456-12-20T03:04:05Z"));
assert.sameValue(12, cal.monthsInYear("+000998-01-28T03:04:05Z"));
assert.sameValue(12, cal.monthsInYear("3456-12"));
assert.sameValue(12, cal.monthsInYear("+000998-01"));
