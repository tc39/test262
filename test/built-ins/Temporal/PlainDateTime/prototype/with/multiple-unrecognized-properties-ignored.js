// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Unrecognized units are ignored
esid: sec-temporal.plaindatetime.prototype.with
features: [Temporal]
---*/

const datetime = new PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const units = ["year", "month", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];

units.forEach((unit) => {
  let plural = `${unit}s`;
  let arg = { month: 12 };
  arg[plural] = 1;
  assert.sameValue(
    `${datetime.with(arg)}`,
    "1976-12-18T15:23:30.123456789",
    `unrecognized property (${plural}) gets ignored`
  );
});
