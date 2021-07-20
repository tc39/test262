// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
description: Temporal.Calendar.prototype.dateUntil with largestUnit === "week"
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

["week", "weeks"].forEach(function(largestUnit) {
  let opt = {largestUnit};
  assert.sameValue("PT0S", cal.dateUntil("2021-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("P1D", cal.dateUntil("2021-07-16", "2021-07-17", opt).toJSON());
  assert.sameValue("P1W", cal.dateUntil("2021-07-16", "2021-07-23", opt).toJSON());
  assert.sameValue("P4W4D", cal.dateUntil("2021-07-16", "2021-08-17", opt).toJSON());
  assert.sameValue("P4W", cal.dateUntil("2021-07-16", "2021-08-13", opt).toJSON());
  assert.sameValue("P8W6D", cal.dateUntil("2021-07-16", "2021-09-16", opt).toJSON());
  assert.sameValue("P52W1D",
      cal.dateUntil("2021-07-16", "2022-07-16", opt).toJSON());
  assert.sameValue("P521W5D"
      ,cal.dateUntil("2021-07-16", "2031-07-16", opt).toJSON());

  assert.sameValue("-P1D",
      cal.dateUntil("2021-07-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P4W4D",
      cal.dateUntil("2021-08-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P4W",
      cal.dateUntil("2021-08-13", "2021-07-16", opt).toJSON());
  assert.sameValue("-P8W6D",
      cal.dateUntil("2021-09-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P52W1D",
      cal.dateUntil("2022-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P521W5D",
      cal.dateUntil("2031-07-16", "2021-07-16", opt).toJSON());
});
