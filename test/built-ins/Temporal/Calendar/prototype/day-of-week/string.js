// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dayofweek
description: Temporal.Calendar.prototype.dayOfWeek will take ISO8601 string
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

assert.sameValue(5, cal.dayOfWeek("2019-01-18"));
// leap year
assert.sameValue(2, cal.dayOfWeek("2020-02-18"));
// non leap
assert.sameValue(1, cal.dayOfWeek("2019-02-18"));
assert.sameValue(1, cal.dayOfWeek("2019-03-18"));
assert.sameValue(4, cal.dayOfWeek("2019-04-18"));
assert.sameValue(6, cal.dayOfWeek("2019-05-18"));
assert.sameValue(2, cal.dayOfWeek("2019-06-18"));
assert.sameValue(4, cal.dayOfWeek("2019-07-18"));
assert.sameValue(7, cal.dayOfWeek("2019-08-18"));
assert.sameValue(3, cal.dayOfWeek("2019-09-18"));
assert.sameValue(5, cal.dayOfWeek("2019-10-18"));
assert.sameValue(1, cal.dayOfWeek("2019-11-18"));
assert.sameValue(3, cal.dayOfWeek("2019-12-18"));
