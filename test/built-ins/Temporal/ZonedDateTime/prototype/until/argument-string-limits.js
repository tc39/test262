// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: ISO strings at the edges of the representable range
features: [Temporal]
---*/

const timeZone = "UTC";
const instance = new Temporal.ZonedDateTime(0n, timeZone);

const validStrings = [
  "-271821-04-20T00:00Z[UTC]",
  "+275760-09-13T00:00Z[UTC]",
  "+275760-09-13T01:00+01:00[+01:00]",
  "+275760-09-13T23:59+23:59[+23:59]",
];

for (const arg of validStrings) {
  instance.until(arg);
}

const invalidStrings = [
  "-271821-04-19T23:00-01:00[-01:00]",
  "-271821-04-19T00:01-23:59[-23:59]",
  "-271821-04-19T23:59:59.999999999Z[UTC]",
  "-271821-04-19T23:00-00:59[-00:59]",
  "-271821-04-19T00:00:00-23:59[-23:59]",
  "+275760-09-13T00:00:00.000000001Z[UTC]",
  "+275760-09-13T01:00+00:59[+00:59]",
  "+275760-09-14T00:00+23:59[+23:59]",
];

for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.until(arg),
    `"${arg}" is outside the representable range of ZonedDateTime`
  );
}
