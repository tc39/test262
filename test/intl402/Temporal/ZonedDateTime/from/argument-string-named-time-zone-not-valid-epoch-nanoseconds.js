// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: >
  Named time zones mapping a wall-clock time to epoch nanoseconds outside the
  valid limits
features: [Temporal]
---*/

const invalidStrings = [
  "-271821-04-20[Asia/Tokyo]",
  "-271821-04-20T00:00[Asia/Tokyo]",
  "-271821-04-20T04:59:59.999999999[Etc/GMT-5]",
  "+275760-09-13[America/New_York]",
  "+275760-09-13T00:00[America/New_York]",
  "+275760-09-12T19:00:00.000000001[Etc/GMT+5]",
];

for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => Temporal.ZonedDateTime.from(arg),
    `exact time of "${arg}" is outside the representable range of ZonedDateTime`
  );
}
