// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.with
description: Verify that undefined options are handled correctly.
features: [Temporal]
---*/

const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const expected = "1976-11-05T15:23:30.123456789";

assert.sameValue(
  `${datetime.with({ day: 5 }, {})}`,
  expected,
  "options may be empty object"
);

assert.sameValue(
  `${datetime.with({ day: 5 }, () => {})}`,
  expected,
  "options may be a function that returns an empty object"
);
