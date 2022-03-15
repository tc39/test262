// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.add
description: Verify that undefined options are handled correctly.
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const jan31 = new Temporal.PlainDateTime(2020, 1, 31, 15, 0);

TemporalHelpers.assertPlainDateTime(
  jan31.add({ years: 1 }, {}),
  2021, 1, "M01", 31, 15, 0, 0, 0, 0, 0,
  "options may be empty object"
);

TemporalHelpers.assertPlainDateTime(
  jan31.add({ years: 1 }, () => {}),
  2021, 1, "M01", 31, 15, 0, 0, 0, 0, 0,
  "options may be function object"
);
