// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dayofweek
description: Temporal.Calendar.prototype.dayOfWeek will take Temporal.PlainDate objects
  and return the day of week.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISODayOfWeek(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(4, cal.dayOfWeek(new Temporal.PlainDate(1970, 1, 1)));
assert.sameValue(6, cal.dayOfWeek(new Temporal.PlainDate(2000, 1, 1)));

assert.sameValue(5, cal.dayOfWeek(new Temporal.PlainDate(2021, 1, 15)));
// leap year
assert.sameValue(6, cal.dayOfWeek(new Temporal.PlainDate(2020, 2, 15)));
assert.sameValue(2, cal.dayOfWeek(new Temporal.PlainDate(2000, 2, 15)));
// non-leap year
assert.sameValue(1, cal.dayOfWeek(new Temporal.PlainDate(2021, 2, 15)));
assert.sameValue(1, cal.dayOfWeek(new Temporal.PlainDate(2021, 3, 15)));
assert.sameValue(4, cal.dayOfWeek(new Temporal.PlainDate(2021, 4, 15)));
assert.sameValue(6, cal.dayOfWeek(new Temporal.PlainDate(2021, 5, 15)));
assert.sameValue(2, cal.dayOfWeek(new Temporal.PlainDate(2021, 6, 15)));
assert.sameValue(4, cal.dayOfWeek(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue(7, cal.dayOfWeek(new Temporal.PlainDate(2021, 8, 15)));
assert.sameValue(3, cal.dayOfWeek(new Temporal.PlainDate(2021, 9, 15)));
assert.sameValue(5, cal.dayOfWeek(new Temporal.PlainDate(2021, 10, 15)));
assert.sameValue(1, cal.dayOfWeek(new Temporal.PlainDate(2021, 11, 15)));
assert.sameValue(3, cal.dayOfWeek(new Temporal.PlainDate(2021, 12, 15)));
