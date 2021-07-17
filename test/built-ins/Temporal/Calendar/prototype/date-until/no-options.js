// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
description: Temporal.Calendar.prototype.dateUntil w/o options
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Set one to ? ToTemporalDate(one).
  5. Set two to ? ToTemporalDate(two).
  6. Set options to ? GetOptionsObject(options).
  7. Let largestUnit be ? ToLargestTemporalUnit(options, « "hour", "minute", "second", "millisecond", "microsecond", "nanosecond" », "auto", "day").
  8. Let result be ! DifferenceISODate(one.[[ISOYear]], one.[[ISOMonth]], one.[[ISODay]], two.[[ISOYear]], two.[[ISOMonth]], two.[[ISODay]], largestUnit).
  9. Return ? CreateTemporalDuration(result.[[Years]], result.[[Months]], result.[[Weeks]], result.[[Days]], 0, 0, 0, 0, 0, 0).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue("PT0S", cal.dateUntil("2021-07-16", "2021-07-16").toJSON());
assert.sameValue("P1D", cal.dateUntil("2021-07-16", "2021-07-17").toJSON());
assert.sameValue("P32D", cal.dateUntil("2021-07-16", "2021-08-17").toJSON());
assert.sameValue("P62D", cal.dateUntil("2021-07-16", "2021-09-16").toJSON());
assert.sameValue("P365D", cal.dateUntil("2021-07-16", "2022-07-16").toJSON());
assert.sameValue("P3652D", cal.dateUntil("2021-07-16", "2031-07-16").toJSON());

assert.sameValue("-P1D", cal.dateUntil("2021-07-17", "2021-07-16").toJSON());
assert.sameValue("-P32D", cal.dateUntil("2021-08-17", "2021-07-16").toJSON());
assert.sameValue("-P62D", cal.dateUntil("2021-09-16", "2021-07-16").toJSON());
assert.sameValue("-P365D", cal.dateUntil("2022-07-16", "2021-07-16").toJSON());
assert.sameValue("-P3652D", cal.dateUntil("2031-07-16", "2021-07-16").toJSON());
