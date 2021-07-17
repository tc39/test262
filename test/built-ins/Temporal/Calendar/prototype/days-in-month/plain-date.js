// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.daysinmonth
description: Temporal.Calendar.prototype.daysInMonth will take Temporal.PlainDate object
  and return the number of days in that month.
  and return Array of the same content.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slots, then
  a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ISODaysInMonth(temporalDateLike.[[ISOYear]], temporalDateLike.[[ISOMonth]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 1, 15)));
// leap year
assert.sameValue(29, cal.daysInMonth(new Temporal.PlainDate(2020, 2, 15)));
assert.sameValue(29, cal.daysInMonth(new Temporal.PlainDate(2000, 2, 15)));
// non-leap year
assert.sameValue(28, cal.daysInMonth(new Temporal.PlainDate(2021, 2, 15)));
assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 3, 15)));
assert.sameValue(30, cal.daysInMonth(new Temporal.PlainDate(2021, 4, 15)));
assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 5, 15)));
assert.sameValue(30, cal.daysInMonth(new Temporal.PlainDate(2021, 6, 15)));
assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 8, 15)));
assert.sameValue(30, cal.daysInMonth(new Temporal.PlainDate(2021, 9, 15)));
assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 10, 15)));
assert.sameValue(30, cal.daysInMonth(new Temporal.PlainDate(2021, 11, 15)));
assert.sameValue(31, cal.daysInMonth(new Temporal.PlainDate(2021, 12, 15)));
