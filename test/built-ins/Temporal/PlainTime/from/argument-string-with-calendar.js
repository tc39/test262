// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-totemporaltime
description: Strings with any calendars are not part of TemporalTimeString.
info: |
    b. Let result be ? ParseTemporalTimeString(string).  
  sec-temporal-parsetemporaltimestring steps 3–14:
    2. If isoString does not satisfy the syntax of a TemporalTimeString (see 13.33), then
      a. Throw a RangeError exception.
features: [Temporal]
---*/

const isoString = "2004-03-21T10:00:00";

const plainTime = Temporal.PlainTime.from(isoString);
assert.sameValue(plainTime.calendar.id, "iso8601");

const invalid = [
  "[u-ca=iso8601]",
  "[u-ca=indian]",
  "[u-ca=hebrew]",
];

for (const s of invalid) {
  const input = isoString + s;
  assert.throws(RangeError, () => Temporal.PlainTime.from(input));
}
