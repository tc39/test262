// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Plural forms of known units are not acceptable
esid: sec-temporal.plaindatetime.prototype.with
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);

const units = ["year", "month", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];

units.forEach((unit) => {
  let plural = `${unit}s`;
  let options = {};
  options[plural] = 1;
  assert.throws(
    TypeError,
    () => instance.with(options),
    `plural unit ("${plural}" vs "${unit}") is not acceptable`
  );
});
