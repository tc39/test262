// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dayofyear
description: Temporal.Calendar.prototype.dayOfYear will take ISO8601 string and
  return the day of year.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISODayOfYear(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(18, cal.dayOfYear("2019-01-18"));
assert.sameValue(49, cal.dayOfYear("2020-02-18"));
assert.sameValue(365, cal.dayOfYear("2019-12-31"));
assert.sameValue(366, cal.dayOfYear("2000-12-31"));
