// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
description: Temporal.Calendar.prototype.dateUntil with largestUnit: "year"
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

["year", "years"].forEach(function(largestUnit) {
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
  assert.sameValue("P1Y",
      cal.dateUntil("2021-07-16", "2022-07-16", opt).toJSON());
  assert.sameValue("P1Y3D",
      cal.dateUntil("2021-07-16", "2022-07-19", opt).toJSON());
  assert.sameValue("P1Y2M3D",
      cal.dateUntil("2021-07-16", "2022-09-19", opt).toJSON());
  assert.sameValue("P10Y",
      cal.dateUntil("2021-07-16", "2031-07-16", opt).toJSON());
  assert.sameValue("P10Y5M",
      cal.dateUntil("2021-07-16", "2031-12-16", opt).toJSON());
  assert.sameValue("P23Y7M",
      cal.dateUntil("1997-12-16", "2021-07-16", opt).toJSON());
  assert.sameValue("P24Y",
      cal.dateUntil("1997-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("P23Y11M29D",
      cal.dateUntil("1997-07-16", "2021-07-15", opt).toJSON());
  assert.sameValue("P23Y11M30D",
      cal.dateUntil("1997-06-16", "2021-06-15", opt).toJSON());
  assert.sameValue("P60Y1M",
      cal.dateUntil("1960-02-16", "2020-03-16", opt).toJSON());
  assert.sameValue("P61Y27D",
      cal.dateUntil("1960-02-16", "2021-03-15", opt).toJSON());
  assert.sameValue("P60Y28D",
      cal.dateUntil("1960-02-16", "2020-03-15", opt).toJSON());

  assert.sameValue("P3M16D",
      cal.dateUntil("2021-03-30", "2021-07-16", opt).toJSON());
  assert.sameValue("P1Y3M16D",
      cal.dateUntil("2020-03-30", "2021-07-16", opt).toJSON());
  assert.sameValue("P61Y3M16D",
      cal.dateUntil("1960-03-30", "2021-07-16", opt).toJSON());
  assert.sameValue("P1Y6M16D",
      cal.dateUntil("2019-12-30", "2021-07-16", opt).toJSON());
  assert.sameValue("P6M16D",
      cal.dateUntil("2020-12-30", "2021-07-16", opt).toJSON());
  assert.sameValue("P23Y6M16D",
      cal.dateUntil("1997-12-30", "2021-07-16", opt).toJSON());
  assert.sameValue("P2019Y6M21D",
      cal.dateUntil("0001-12-25", "2021-07-16", opt).toJSON());
  assert.sameValue("P1Y2M5D",
      cal.dateUntil("2019-12-30", "2021-03-05", opt).toJSON());

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
  assert.sameValue("-P1Y",
      cal.dateUntil("2022-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P1Y1D",
      cal.dateUntil("2022-07-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P1Y3M1D",
      cal.dateUntil("2022-10-17", "2021-07-16", opt).toJSON());
  assert.sameValue("-P10Y",
      cal.dateUntil("2031-07-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P10Y11M",
      cal.dateUntil("2032-07-16", "2021-08-16", opt).toJSON());

  assert.sameValue("-P10Y5M",
      cal.dateUntil("2031-12-16", "2021-07-16", opt).toJSON());
  assert.sameValue("-P13Y7M",
      cal.dateUntil("2011-07-16", "1997-12-16", opt).toJSON());
  assert.sameValue("-P24Y",
      cal.dateUntil("2021-07-16", "1997-07-16", opt).toJSON());
  assert.sameValue("-P23Y11M30D",
      cal.dateUntil("2021-07-15", "1997-07-16", opt).toJSON());
  assert.sameValue("-P23Y11M29D",
      cal.dateUntil("2021-06-15", "1997-06-16", opt).toJSON());
  assert.sameValue("-P60Y1M",
      cal.dateUntil("2020-03-16", "1960-02-16", opt).toJSON());
  assert.sameValue("-P61Y28D",
      cal.dateUntil("2021-03-15", "1960-02-16", opt).toJSON());
  assert.sameValue("-P60Y28D",
      cal.dateUntil("2020-03-15", "1960-02-16", opt).toJSON());

  assert.sameValue("-P61Y3M17D",
      cal.dateUntil("2021-07-16", "1960-03-30", opt).toJSON());

  assert.sameValue("-P2019Y6M22D",
      cal.dateUntil("2021-07-16", "0001-12-25", opt).toJSON());
  assert.sameValue("-P23Y6M17D",
      cal.dateUntil("2021-07-16", "1997-12-30", opt).toJSON());
});
