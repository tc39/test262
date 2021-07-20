// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.weekofyear
description: Temporal.Calendar.prototype.weekofyear will take valid ISO8601 string
  and return the week of year of that date.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISOWeekOfYear(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

// From https://en.wikipedia.org/wiki/ISO_week_date#Relation_with_the_Gregorian_calendar
assert.sameValue(53, cal.weekOfYear("1977-01-01"));
assert.sameValue(53, cal.weekOfYear("1977-01-02"));

assert.sameValue(52, cal.weekOfYear("1977-12-31"));
assert.sameValue(52, cal.weekOfYear("1978-01-01"));
assert.sameValue(1, cal.weekOfYear("1978-01-02"));

assert.sameValue(52, cal.weekOfYear("1978-12-31"));
assert.sameValue(1, cal.weekOfYear("1979-01-01"));

assert.sameValue(52, cal.weekOfYear("1979-12-30"));
assert.sameValue(1, cal.weekOfYear("1979-12-31"));
assert.sameValue(1, cal.weekOfYear("1980-01-01"));

assert.sameValue(52, cal.weekOfYear("1980-12-28"));
assert.sameValue(1, cal.weekOfYear("1980-12-29"));
assert.sameValue(1, cal.weekOfYear("1980-12-30"));
assert.sameValue(1, cal.weekOfYear("1980-12-31"));
assert.sameValue(1, cal.weekOfYear("1981-01-01"));

assert.sameValue(53, cal.weekOfYear("1981-12-31"));
assert.sameValue(53, cal.weekOfYear("1982-01-01"));
assert.sameValue(53, cal.weekOfYear("1982-01-02"));
assert.sameValue(53, cal.weekOfYear("1982-01-03"));
