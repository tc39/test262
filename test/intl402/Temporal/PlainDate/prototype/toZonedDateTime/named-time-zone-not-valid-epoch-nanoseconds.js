// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.tozoneddatetime
description: >
  Named time zones mapping start-of-day or a combined wall-clock time to epoch
  nanoseconds outside the valid limits
features: [Temporal]
---*/

const min = new Temporal.PlainDate(-271821, 4, 20);
const max = new Temporal.PlainDate(275760, 9, 13);

assert.throws(
  RangeError,
  () => min.toZonedDateTime("Asia/Tokyo"),
  "start of day before the lower limit (Asia/Tokyo)"
);

assert.throws(
  RangeError,
  () => min.toZonedDateTime("Etc/GMT-5"),
  "start of day before the lower limit (Etc/GMT-5)"
);

assert.throws(
  RangeError,
  () => min.toZonedDateTime({
    timeZone: "Etc/GMT-5",
    plainTime: new Temporal.PlainTime(4, 59, 59, 999, 999, 999),
  }),
  "wall-clock time one nanosecond before the lower limit"
);

assert.throws(
  RangeError,
  () => max.toZonedDateTime("America/New_York"),
  "start of day after the upper limit (America/New_York)"
);

assert.throws(
  RangeError,
  () => new Temporal.PlainDate(275760, 9, 12).toZonedDateTime({
    timeZone: "Etc/GMT+5",
    plainTime: new Temporal.PlainTime(19, 0, 0, 0, 0, 1),
  }),
  "wall-clock time one nanosecond after the upper limit"
);
