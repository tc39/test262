// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.duration.prototype.with
description: Temporal.Duration.prototype.with throws RangeError on
  CreateTemporalDuration if resulting duration is invalid.
info: |
  24. Return ? CreateTemporalDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds).
features: [Temporal]
---*/
let dur = new Temporal.Duration(1,2,3,4,5,6,7,8,9,10);
[
  {years: -1}, {months: -1}, {weeks: -1}, {days: -1},
  {hours: -1}, {minutes: -1}, {seconds: -1}, {milliseconds: -1},
  {microseconds: -1}, {nanoseconds: -1},
].forEach(
        function(durationLike) {
  assert.throws(RangeError, () => dur.with(durationLike),
      "Throw RangeError if content in temporalDurationLike conflict with duration" +
      JSON.stringify(durationLike));
    });

dur = new Temporal.Duration(-1,-2,-3,-4,-5,-6,-7,-8,-9,-10);
[
  {years: 1}, {months: 1}, {weeks: 1}, {days: 1},
  {hours: 1}, {minutes: 1}, {seconds: 1}, {milliseconds: 1},
  {microseconds: 1}, {nanoseconds: 1},
].forEach(
        function(durationLike) {
  assert.throws(RangeError, () => dur.with(durationLike),
      "Throw RangeError if content in temporalDurationLike conflict with duration" +
      JSON.stringify(durationLike));
    });
