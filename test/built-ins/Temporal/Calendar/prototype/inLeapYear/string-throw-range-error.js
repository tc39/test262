// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear throw RangeError while ISO8601 string is not a date.
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

assert.throws(RangeError, () => cal.inLeapYear("2019-03"),
    "Invalid time value");
assert.throws(RangeError, () => cal.inLeapYear("--03-04"),
    "Invalid time value");
assert.throws(RangeError, () => cal.inLeapYear("P1Y"),
    "Invalid time value");
assert.throws(RangeError, () => cal.inLeapYear("+P1Y"),
    "Invalid time value");
assert.throws(RangeError, () => cal.inLeapYear("-P1Y"),
    "Invalid time value");
