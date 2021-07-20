// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthsinyear
description: Temporal.Calendar.prototype.monthsInYear will throw RangeError with incorrect ISO8601 string.
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

assert.throws(RangeError, () => cal.monthsInYear("2021-01"), "Invalid time value");
assert.throws(RangeError, () => cal.monthsInYear("2019-12"), "Invalid time value");
assert.throws(RangeError, () => cal.monthsInYear("P1Y"), "Invalid time value");
assert.throws(RangeError, () => cal.monthsInYear("-P12Y"), "Invalid time value");
