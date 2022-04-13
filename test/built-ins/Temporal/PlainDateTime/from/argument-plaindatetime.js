// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.from
description: A Temporal PlainDateTime object is an acceptable argument
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const orig = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 20, 123, 456, 789);

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from(orig),
  1976, 11, "M11", 18, 15, 23, 20, 123, 456, 789,
  "PlainDateTime is copied"
);

assert.notSameValue(
  Temporal.PlainDateTime.from(orig),
  orig,
  "When a PlainDateTime is given, the returned value is not the original PlainDateTime"
);
