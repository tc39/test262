// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
description: Temporal.Calendar.prototype.dateUntil with largestUnit: "month"
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

["month", "months"].forEach(function(largestUnit) {
  let opt = {largestUnit};
  assert.sameValue("PT0S", cal.dateUntil("2021-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("P1D", cal.dateUntil("2021-07-16", "2021-07-17", opt).toJSON());
  assert.sameValue("P7D", cal.dateUntil("2021-07-16", "2021-07-23", opt).toJSON());
  assert.sameValue("P1M", cal.dateUntil("2021-07-16", "2021-08-16", opt).toJSON());
  assert.sameValue("P1M", cal.dateUntil("2020-12-16", "2021-01-16", opt).toJSON());
  assert.sameValue("P1M", cal.dateUntil("2021-01-05", "2021-02-05", opt).toJSON());
  assert.sameValue("P2M", cal.dateUntil("2021-01-07", "2021-03-07", opt).toJSON());
  assert.sameValue("P1M1D", cal.dateUntil("2021-07-16", "2021-08-17", opt).toJSON());
  assert.sameValue("P28D", cal.dateUntil("2021-07-16", "2021-08-13", opt).toJSON());
  assert.sameValue("P2M", cal.dateUntil("2021-07-16", "2021-09-16", opt).toJSON());
  assert.sameValue("P12M",
      cal.dateUntil("2021-07-16", "2022-07-16", opt).toJSON());
  assert.sameValue("P120M"
      ,cal.dateUntil("2021-07-16", "2031-07-16", opt).toJSON());

  assert.sameValue("-P1D",
      cal.dateUntil("2021-07-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P1M1D",
      cal.dateUntil("2021-08-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P28D",
      cal.dateUntil("2021-08-13", "2021-07-16", opt).toJSON());
  assert.sameValue("-P1M",
      cal.dateUntil("2021-08-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P1M3D",
      cal.dateUntil("2021-08-16", "2021-07-13", opt).toJSON());
  assert.sameValue("-P2M",
      cal.dateUntil("2021-09-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P2M5D",
      cal.dateUntil("2021-09-21", "2021-07-16", opt).toJSON());
  assert.sameValue("-P12M",
      cal.dateUntil("2022-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P12M1D",
      cal.dateUntil("2022-07-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P120M",
      cal.dateUntil("2031-07-16", "2021-07-16", opt).toJSON());
});
