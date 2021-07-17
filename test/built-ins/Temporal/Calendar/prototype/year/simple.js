// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.year
description: Temporal.Calendar.prototype.year will take different kind of object and return 
  the value of the year.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
  a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return ! ISOYear(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(2021, cal.year(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue(1997, cal.year(new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)));
assert.sameValue(1999, cal.year(new Temporal.PlainYearMonth(1999, 6)));
assert.sameValue(2019, cal.year("2019-03-15"));
