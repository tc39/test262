// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.tozoneddatetime
description: >
  Named time zones mapping a wall-clock time to epoch nanoseconds outside the
  valid limits
features: [Temporal]
---*/

const min = new Temporal.PlainDateTime(-271821, 4, 20, 0, 0, 0, 0, 0, 0);
const afterMin = new Temporal.PlainDateTime(-271821, 4, 20, 4, 59, 59, 999, 999, 999);
const max = new Temporal.PlainDateTime(275760, 9, 13, 0, 0, 0, 0, 0, 0);
const beforeMax = new Temporal.PlainDateTime(275760, 9, 12, 19, 0, 0, 0, 0, 1);

const invalid = [
  [min, "Asia/Tokyo", "positive offset at the lower limit"],
  [afterMin, "Etc/GMT-5", "one nanosecond before the lower limit"],
  [max, "America/New_York", "negative offset at the upper limit"],
  [beforeMax, "Etc/GMT+5", "one nanosecond after the upper limit"],
];

for (const [dateTime, timeZone, message] of invalid) {
  assert.throws(
    RangeError,
    () => dateTime.toZonedDateTime(timeZone),
    `${dateTime} in ${timeZone} is outside the representable range of ZonedDateTime (${message})`
  );
}
