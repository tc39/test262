// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dayofyear
description: Temporal.Calendar.prototype.dayOfYear will take PlainDate object and
return the day of year.
  and return Array of the same content.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISODayOfYear(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(1, cal.dayOfYear(new Temporal.PlainDate(1970, 1, 1)));
assert.sameValue(1, cal.dayOfYear(new Temporal.PlainDate(2000, 1, 1)));

assert.sameValue(15, cal.dayOfYear(new Temporal.PlainDate(2021, 1, 15)));
assert.sameValue(46, cal.dayOfYear(new Temporal.PlainDate(2020, 2, 15)));
assert.sameValue(46, cal.dayOfYear(new Temporal.PlainDate(2000, 2, 15)));
assert.sameValue(75, cal.dayOfYear(new Temporal.PlainDate(2020, 3, 15)));
assert.sameValue(75, cal.dayOfYear(new Temporal.PlainDate(2000, 3, 15)));
assert.sameValue(74, cal.dayOfYear(new Temporal.PlainDate(2001, 3, 15)));
assert.sameValue(366, cal.dayOfYear(new Temporal.PlainDate(2000, 12, 31)));
assert.sameValue(365, cal.dayOfYear(new Temporal.PlainDate(2001, 12, 31)));
