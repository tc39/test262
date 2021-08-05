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
assert.sameValue(cal.weekOfYear("1977-01-01"), 53);
assert.sameValue(cal.weekOfYear("1977-01-02"), 53);

assert.sameValue(cal.weekOfYear("1977-12-31"), 52);
assert.sameValue(cal.weekOfYear("1978-01-01"), 52);
assert.sameValue(cal.weekOfYear("1978-01-02"), 1);

assert.sameValue(cal.weekOfYear("1978-12-31"), 52);
assert.sameValue(cal.weekOfYear("1979-01-01"), 1);

assert.sameValue(cal.weekOfYear("1979-12-30"), 52);
assert.sameValue(cal.weekOfYear("1979-12-31"), 1);
assert.sameValue(cal.weekOfYear("1980-01-01"), 1);

assert.sameValue(cal.weekOfYear("1980-12-28"), 52);
assert.sameValue(cal.weekOfYear("1980-12-29"), 1);
assert.sameValue(cal.weekOfYear("1980-12-30"), 1);
assert.sameValue(cal.weekOfYear("1980-12-31"), 1);
assert.sameValue(cal.weekOfYear("1981-01-01"), 1);

assert.sameValue(cal.weekOfYear("1981-12-31"), 53);
assert.sameValue(cal.weekOfYear("1982-01-01"), 53);
assert.sameValue(cal.weekOfYear("1982-01-02"), 53);
assert.sameValue(cal.weekOfYear("1982-01-03"), 53);
