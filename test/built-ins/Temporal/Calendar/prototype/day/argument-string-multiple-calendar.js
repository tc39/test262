// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.day
description: >
  More than one calendar annotation is not syntactical if any have the criical
  flag
features: [Temporal]
---*/

const invalidStrings = [
  "1970-01-01[u-ca=iso8601][!u-ca=iso8601]",
  "1970-01-01[!u-ca=iso8601][u-ca=iso8601]",
  "1970-01-01[UTC][u-ca=iso8601][!u-ca=iso8601]",
  "1970-01-01[u-ca=iso8601][foo=bar][!u-ca=iso8601]",
  "1970-01-01T00:00[u-ca=iso8601][!u-ca=iso8601]",
  "1970-01-01T00:00[!u-ca=iso8601][u-ca=iso8601]",
  "1970-01-01T00:00[UTC][u-ca=iso8601][!u-ca=iso8601]",
  "1970-01-01T00:00[u-ca=iso8601][foo=bar][!u-ca=iso8601]",
];
const instance = new Temporal.Calendar("iso8601");
invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => instance.day(arg),
    `reject more than one calendar annotation if any critical: ${arg}`
  );
});
