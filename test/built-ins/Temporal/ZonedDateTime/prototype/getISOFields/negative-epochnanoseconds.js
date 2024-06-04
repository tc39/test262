// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.getisofields
description: A pre-epoch value is handled correctly by the modulo operation in GetISOPartsFromEpoch
info: |
    sec-temporal-getisopartsfromepoch step 1:
      1. Let _remainderNs_ be the mathematical value whose sign is the sign of _epochNanoseconds_ and whose magnitude is abs(_epochNanoseconds_) modulo 10<sup>6</sup>.
    sec-temporal-builtintimezonegetplaindatetimefor step 2:
      2. Let _result_ be ! GetISOPartsFromEpoch(_instant_.[[Nanoseconds]]).
features: [Temporal]
includes: [deepEqual.js]
---*/

const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");

// This code path shows up anywhere we convert an exact time, before the Unix
// epoch, with nonzero microseconds or nanoseconds, into a wall time.

const result = datetime.getISOFields();
assert.deepEqual(result, {
  calendar: "iso8601",
  isoDay: 24,
  isoHour: 16,
  isoMicrosecond: 0,
  isoMillisecond: 0,
  isoMinute: 50,
  isoMonth: 7,
  isoNanosecond: 1,
  isoSecond: 35,
  isoYear: 1969,
  offset: "+00:00",
  timeZone: "UTC"
});
