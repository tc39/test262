// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.getnexttransition
description: >
  More than one calendar annotation is not syntactical if any have the criical
  flag
features: [Temporal]
---*/

const invalidStrings = [
  "1970-01-01T00:00Z[u-ca=iso8601][!u-ca=iso8601]",
  "1970-01-01T00:00Z[!u-ca=iso8601][u-ca=iso8601]",
  "1970-01-01T00:00Z[UTC][u-ca=iso8601][!u-ca=iso8601]",
  "1970-01-01T00:00Z[u-ca=iso8601][foo=bar][!u-ca=iso8601]",
];
const instance = new Temporal.TimeZone("UTC");
invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => instance.getNextTransition(arg),
    `reject more than one calendar annotation if any critical: ${arg}`
  );
});
