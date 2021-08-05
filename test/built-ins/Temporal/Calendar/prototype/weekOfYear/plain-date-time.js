// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.weekofyear
description: Temporal.Calendar.prototype.weekofyear will take Temporal.PlainDateTime object
  and return the week of year of that date.
info: |
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISOWeekOfYear(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

// From https://en.wikipedia.org/wiki/ISO_week_date#Relation_with_the_Gregorian_calendar
dt = new Temporal.PlainDateTime(1977, 1, 1, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 53);

dt = new Temporal.PlainDateTime(1977, 1, 2, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 53);


dt = new Temporal.PlainDateTime(1977, 12, 31, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 52);

dt = new Temporal.PlainDateTime(1978, 1, 1, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 52);

dt = new Temporal.PlainDateTime(1978, 1, 2, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);


dt = new Temporal.PlainDateTime(1978, 12, 31, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 52);

dt = new Temporal.PlainDateTime(1979, 1, 1, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);


dt = new Temporal.PlainDateTime(1979, 12, 30, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 52);

dt = new Temporal.PlainDateTime(1979, 12, 31, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);

dt = new Temporal.PlainDateTime(1980, 1, 1, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);


dt = new Temporal.PlainDateTime(1980, 12, 29, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 52);

dt = new Temporal.PlainDateTime(1980, 12, 29, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);

dt = new Temporal.PlainDateTime(1980, 12, 30, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);

dt = new Temporal.PlainDateTime(1980, 12, 31, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);

dt = new Temporal.PlainDateTime(1981, 1, 1, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 1);


dt = new Temporal.PlainDateTime(1981, 12, 31, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 53);

dt = new Temporal.PlainDateTime(1982, 1, 1, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 53);

dt = new Temporal.PlainDateTime(1982, 1, 2, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 53);

dt = new Temporal.PlainDateTime(1982, 1, 3, 9, 8);
assert.sameValue(cal.weekOfYear(dt), 53);
