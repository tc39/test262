// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.month
description: Temporal.Calendar.prototype.month will throws TypeError while the input object
  has an [[InitializedTemporalMonthDay]] internal slot.
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

assert.throws(TypeError, () => cal.month(new Temporal.PlainMonthDay(3, 16)),
    "invalid_argument");
