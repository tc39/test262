// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.daysinyear
description: Temporal.Calendar.prototype.daysInYear will take PlainDate and return
  the number of days in a year.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
  a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ISODaysInYear(temporalDateLike.[[ISOYear]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(1995, 7, 15)));
assert.sameValue(366, cal.daysInYear(new Temporal.PlainDate(1996, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(1997, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(1998, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(1999, 7, 15)));
assert.sameValue(366, cal.daysInYear(new Temporal.PlainDate(2000, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(2001, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(2002, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(2003, 7, 15)));
assert.sameValue(366, cal.daysInYear(new Temporal.PlainDate(2004, 7, 15)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDate(2005, 7, 15)));

assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(1995, 8, 23, 5, 30, 13)));
assert.sameValue(366, cal.daysInYear(new Temporal.PlainDateTime(1996, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(1998, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(1999, 8, 23, 5, 30, 13)));
assert.sameValue(366, cal.daysInYear(new Temporal.PlainDateTime(2000, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(2001, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(2002, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(2003, 8, 23, 5, 30, 13)));
assert.sameValue(366, cal.daysInYear(new Temporal.PlainDateTime(2004, 8, 23, 5, 30, 13)));
assert.sameValue(365, cal.daysInYear(new Temporal.PlainDateTime(2005, 8, 23, 5, 30, 13)));

assert.sameValue(365, cal.daysInYear("2019-03-18"));
assert.sameValue(366, cal.daysInYear("2020-03-18"));
assert.sameValue(365, cal.daysInYear("2021-03-18"));
assert.sameValue(365, cal.daysInYear("2022-03-18"));
assert.sameValue(365, cal.daysInYear("2023-03-18"));
assert.sameValue(366, cal.daysInYear("2024-03-18"));
assert.sameValue(365, cal.daysInYear("2025-03-18"));
assert.sameValue(365, cal.daysInYear("2026-03-18"));
