// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.from
description: A number is converted to a string, which may be a valid ISO string
features: [Temporal]
includes: [temporalHelpers.js]
---*/

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from(19761118),
  1976, 11, "M11", 18, 0, 0, 0, 0, 0, 0,
  "Number may be an acceptable argument"
);

assert.throws(
  RangeError,
  () => Temporal.PlainDateTime.from(1),
  "number, in decimal, has the wrong format (too few digits)"
);

assert.throws(
  RangeError,
  () => Temporal.PlainDateTime.from(1234567890),
  "number, in decimal, has the wrong format (too many digits)"
);
