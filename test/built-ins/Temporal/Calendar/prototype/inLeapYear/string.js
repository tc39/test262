// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear will take an ISO8601 string
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

assert.sameValue(false, cal.inLeapYear("2019-03-18"));
assert.sameValue(true, cal.inLeapYear("2020-03-18"));
assert.sameValue(false, cal.inLeapYear("2021-03-18"));
assert.sameValue(false, cal.inLeapYear("2022-03-18"));
assert.sameValue(false, cal.inLeapYear("2023-03-18"));
assert.sameValue(true, cal.inLeapYear("2024-03-18"));
assert.sameValue(false, cal.inLeapYear("2025-03-18"));
assert.sameValue(false, cal.inLeapYear("2026-03-18"));

assert.sameValue(false, cal.inLeapYear("2019-03-18T13:00:00Z"));
assert.sameValue(true, cal.inLeapYear("2020-12-31T23:59:59Z"));
assert.sameValue(false, cal.inLeapYear("2021-03-18T13:00:00Z"));
assert.sameValue(false, cal.inLeapYear("2022-03-18T13:00:00Z"));
assert.sameValue(false, cal.inLeapYear("2023-03-18T13:00:00Z"));
assert.sameValue(true, cal.inLeapYear("2024-03-18T13:00:00Z"));
assert.sameValue(false, cal.inLeapYear("2025-01-01T00:00:00Z"));
assert.sameValue(false, cal.inLeapYear("2026-03-18T13:00:00Z"));

assert.sameValue(false, cal.inLeapYear("2019-03"));
assert.sameValue(true, cal.inLeapYear("2020-03"));
assert.sameValue(false, cal.inLeapYear("2021-03"));
assert.sameValue(false, cal.inLeapYear("2022-03"));
assert.sameValue(false, cal.inLeapYear("2023-03"));
assert.sameValue(true, cal.inLeapYear("2024-03"));
assert.sameValue(false, cal.inLeapYear("2025-03"));
assert.sameValue(false, cal.inLeapYear("2026-03"));
