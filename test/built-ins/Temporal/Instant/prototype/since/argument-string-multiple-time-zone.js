// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.since
description: More than one time zone annotation is not syntactical
features: [Temporal]
---*/

const invalidStrings = [
  "1970-01-01T00:00Z[UTC][UTC]",
  "1970-01-01T00:00Z[!UTC][UTC]",
  "1970-01-01T00:00Z[UTC][!UTC]",
  "1970-01-01T00:00Z[UTC][u-ca=iso8601][UTC]",
  "1970-01-01T00:00Z[UTC][foo=bar][UTC]",
];
const instance = new Temporal.Instant(0n);
invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => instance.since(arg),
    `reject more than one time zone annotation: ${arg}`
  );
});
