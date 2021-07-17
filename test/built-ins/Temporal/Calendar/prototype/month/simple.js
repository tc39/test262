// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.month
description: Temporal.Calendar.prototype.month will take different kind of object and
  return month value.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is Object and temporalDateLike has an [[InitializedTemporalMonthDay]] internal slot, then
  a. Throw a TypeError exception.
  5. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
  a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  6. Return ! ISOMonth(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(7, cal.month(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue(8, cal.month(new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)));
assert.sameValue(6, cal.month(new Temporal.PlainYearMonth(1999, 6)));
assert.sameValue(3, cal.month("2019-03-15"));
