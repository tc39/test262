// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: >
  NormalizedTimeDurationToDays should not be able to loop arbitrarily.
info: |
  NormalizedTimeDurationToDays ( norm, zonedRelativeTo, timeZoneRec [ , precalculatedPlainDatetime ] )
  ...
  22. If NormalizedTimeDurationSign(_oneDayLess_) × _sign_ ≥ 0, then
    a. Set _norm_ to _oneDayLess_.
    b. Set _relativeResult_ to _oneDayFarther_.
    c. Set _days_ to _days_ + _sign_.
    d. Set _oneDayFarther_ to ? AddDaysToZonedDateTime(_relativeResult_.[[Instant]], _relativeResult_.[[DateTime]], _timeZoneRec_, _zonedRelativeTo_.[[Calendar]], _sign_).
    e. Set dayLengthNs to NormalizedTimeDurationFromEpochNanosecondsDifference(_oneDayFarther.[[EpochNanoseconds]], relativeResult.[[EpochNanoseconds]]).
    f. If NormalizedTimeDurationSign(? SubtractNormalizedTimeDuration(_norm_, _dayLengthNs_)) × _sign_ ≥ 0, then
      i. Throw a *RangeError* exception.
features: [Temporal]
---*/

const dayLengthNs = 86400000000000n;
const dayInstant = new Temporal.Instant(dayLengthNs);
let calls = 0;
const timeZone = new class extends Temporal.TimeZone {
  getPossibleInstantsFor() {
    calls++;
    return [dayInstant];
  }
}("UTC");

const zdt = new Temporal.ZonedDateTime(0n, timeZone);
const other = new Temporal.ZonedDateTime(dayLengthNs, "UTC", "iso8601");

assert.throws(RangeError, () => zdt.since(other, { largestUnit: "day" }), "indefinite loop is prevented");
assert.sameValue(calls, 3, "getPossibleInstantsFor is not called indefinitely");
  // Expected calls:
  // DifferenceZonedDateTime -> NormalizedTimeDurationToDays ->
  //     AddDaysToZonedDateTime (3, step 12)
  //     AddDaysToZonedDateTime (4, step 15)
  //     AddDaysToZonedDateTime (5, step 18.d)
