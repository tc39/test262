// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: >
  Up to 3 intermediate instants may be tried when calculating ZonedDateTime
  difference
includes: [compareArray.js, temporalHelpers.js]
features: [BigInt, Temporal]
---*/

const calls = [];

const springFallZone = TemporalHelpers.springForwardFallBackTimeZone();
TemporalHelpers.observeMethod(calls, springFallZone, "getPossibleInstantsFor");

const dateLineZone = TemporalHelpers.crossDateLineTimeZone();
TemporalHelpers.observeMethod(calls, dateLineZone, "getPossibleInstantsFor");

const zdt1 = new Temporal.ZonedDateTime(946722600_000_000_000n /* = 2000-01-01T02:30 local */, springFallZone);

{
  const zdt2 = new Temporal.ZonedDateTime(949442400_000_000_000n /* = 2000-02-01T14:00 local */, springFallZone);
  const result = zdt1.until(zdt2, { largestUnit: "years" });
  TemporalHelpers.assertDuration(result, 0, 1, 0, 0, 11, 30, 0, 0, 0, 0, "Normal case: no overflow, no DST");
  assert.compareArray(calls, [
    "call getPossibleInstantsFor",  // first intermediate in DifferenceZonedDateTime
  ], "one intermediate should be tried");
}

calls.splice(0);  // clear

{
  const zdt2 = new Temporal.ZonedDateTime(949395600_000_000_000n /* = 2000-02-01T01:00 local */, springFallZone);
  const result = zdt1.until(zdt2, { largestUnit: "years" });
  TemporalHelpers.assertDuration(result, 0, 0, 0, 30, 22, 30, 0, 0, 0, 0, "One day correction: overflow, no DST");
  assert.compareArray(calls, [
    "call getPossibleInstantsFor",  // first intermediate in DifferenceZonedDateTime
    "call getPossibleInstantsFor",  // second intermediate in DifferenceZonedDateTime
  ], "two intermediates should be tried");
}

calls.splice(0);  // clear

{
  const zdt2 = new Temporal.ZonedDateTime(954669600_000_000_000n /* = 2000-04-02T02:00 local */, springFallZone);
  const result = zdt1.until(zdt2, { largestUnit: "years" });
  TemporalHelpers.assertDuration(result, 0, 3, 0, 0, 23, 30, 0, 0, 0, 0, "One day correction: no overflow, DST");
  assert.compareArray(calls, [
    "call getPossibleInstantsFor",  // first intermediate in DifferenceZonedDateTime
    "call getPossibleInstantsFor",  // DisambiguatePossibleInstants on first intermediate
    "call getPossibleInstantsFor",  // second intermediate in DifferenceZonedDateTime
  ], "two intermediates should be tried, with disambiguation");
}

calls.splice(0);  // clear

{
  const start = new Temporal.ZonedDateTime(1325102400_000_000_000n /* = 2011-12-28T10:00 local */, dateLineZone);
  const end = new Temporal.ZonedDateTime(1325257200_000_000_000n /* = 2011-12-31T05:00 local */, dateLineZone);
  const result = start.until(end, { largestUnit: "days" });
  TemporalHelpers.assertDuration(result, 0, 0, 0, 1, 19, 0, 0, 0, 0, 0, "Two days correction: overflow and DST");
  assert.compareArray(calls, [
    "call getPossibleInstantsFor",  // first intermediate in DifferenceZonedDateTime
    "call getPossibleInstantsFor",  // second intermediate in DifferenceZonedDateTime
    "call getPossibleInstantsFor",  // DisambiguatePossibleInstants on second intermediate
    "call getPossibleInstantsFor",  // third intermediate in DifferenceZonedDateTime
  ], "three intermediates should be tried, with disambiguation");
}
