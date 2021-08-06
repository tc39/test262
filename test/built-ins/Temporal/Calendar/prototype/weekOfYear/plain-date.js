// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.weekofyear
description: Temporal.Calendar.prototype.weekofyear will take Temporal.PlainDate object
  and return the week of year of that date.
info: |
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISOWeekOfYear(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

// From https://en.wikipedia.org/wiki/ISO_week_date#Relation_with_the_Gregorian_calendar
let d = new Temporal.PlainDate(1977, 1, 1);
assert.sameValue(cal.weekOfYear(d), 53);

d = new Temporal.PlainDate(1977, 1, 2);
assert.sameValue(cal.weekOfYear(d), 53);


d = new Temporal.PlainDate(1977, 12, 31);
assert.sameValue(cal.weekOfYear(d), 52);

d = new Temporal.PlainDate(1978, 1, 1);
assert.sameValue(cal.weekOfYear(d), 52);

d = new Temporal.PlainDate(1978, 1, 2);
assert.sameValue(cal.weekOfYear(d), 1);


d = new Temporal.PlainDate(1978, 12, 31);
assert.sameValue(cal.weekOfYear(d), 52);

d = new Temporal.PlainDate(1979, 1, 1);
assert.sameValue(cal.weekOfYear(d), 1);


d = new Temporal.PlainDate(1979, 12, 30);
assert.sameValue(cal.weekOfYear(d), 52);

d = new Temporal.PlainDate(1979, 12, 31);
assert.sameValue(cal.weekOfYear(d), 1);

d = new Temporal.PlainDate(1980, 1, 1);
assert.sameValue(cal.weekOfYear(d), 1);


d = new Temporal.PlainDate(1980, 12, 28);
assert.sameValue(cal.weekOfYear(d), 52);

d = new Temporal.PlainDate(1980, 12, 29);
assert.sameValue(cal.weekOfYear(d), 1);

d = new Temporal.PlainDate(1980, 12, 30);
assert.sameValue(cal.weekOfYear(d), 1);

d = new Temporal.PlainDate(1980, 12, 31);
assert.sameValue(cal.weekOfYear(d), 1);

d = new Temporal.PlainDate(1981, 1, 1);
assert.sameValue(cal.weekOfYear(d), 1);


d = new Temporal.PlainDate(1981, 12, 31);
assert.sameValue(cal.weekOfYear(d), 53);

d = new Temporal.PlainDate(1982, 1, 1);
assert.sameValue(cal.weekOfYear(d), 53);

d = new Temporal.PlainDate(1982, 1, 2);
assert.sameValue(cal.weekOfYear(d), 53);

d = new Temporal.PlainDate(1982, 1, 3);
assert.sameValue(cal.weekOfYear(d), 53);
