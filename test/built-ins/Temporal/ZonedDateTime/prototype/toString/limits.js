// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.tostring
description: Formatting at the minimum and maximum epoch nanoseconds
features: [Temporal]
---*/

const minEpochNanoseconds = -8_640_000_000_000_000_000_000n;
const maxEpochNanoseconds = 8_640_000_000_000_000_000_000n;

const cases = [
  ["UTC", "-271821-04-20T00:00:00+00:00[UTC]", "+275760-09-13T00:00:00+00:00[UTC]"],
  ["+23:59", "-271821-04-20T23:59:00+23:59[+23:59]", "+275760-09-13T23:59:00+23:59[+23:59]"],
  ["-23:59", "-271821-04-19T00:01:00-23:59[-23:59]", "+275760-09-12T00:01:00-23:59[-23:59]"]
];

for (const [timeZone, expectedMin, expectedMax] of cases) {
  assert.sameValue(
    new Temporal.ZonedDateTime(minEpochNanoseconds, timeZone).toString(),
    expectedMin,
    `minimum epoch nanoseconds in ${timeZone}`
  );
  assert.sameValue(
    new Temporal.ZonedDateTime(maxEpochNanoseconds, timeZone).toString(),
    expectedMax,
    `maximum epoch nanoseconds in ${timeZone}`
  );
}
