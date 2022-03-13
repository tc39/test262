// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaintime
description: An instance of PlainTime can be used as an argument
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(2015, 12, 7, 3, 24, 30, 0, 3, 500);
const time = new Temporal.PlainTime(11, 22);

assert.sameValue(
  `${dt.withPlainTime(time)}`,
  '2015-12-07T11:22:00',
  'datetime.withPlainTime(time) works'
);
