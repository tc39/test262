// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthcode
description: Temporal.Calendar.prototype.monthCode will take different kind of object and return
  the value of the monthCode.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]], [[InitializedTemporalMonthDay]], or [[InitializedTemporalYearMonth]] internal slot, then
  a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return ! ISOMonthCode(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue("M07", cal.monthCode(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue("M08", cal.monthCode(new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)));
assert.sameValue("M06", cal.monthCode(new Temporal.PlainYearMonth(1999, 6)));
assert.sameValue("M02", cal.monthCode(new Temporal.PlainMonthDay(2, 6)));
assert.sameValue("M03", cal.monthCode("2019-03-15"));
