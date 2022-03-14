// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: Testing overflow hours (subtracting hours that push one to the next/previous day)
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const later = new Temporal.PlainDateTime(2019, 10, 29, 10, 46, 38, 271, 986, 102);

TemporalHelpers.assertPlainDateTime(
  later.subtract({ hours: 12 }),
  2019, 10, "M10", 28, 22, 46, 38, 271, 986, 102,
  'subtract result'
);

const earlier = new Temporal.PlainDateTime(2019, 10, 29, 10, 46, 38, 271, 986, 102);

TemporalHelpers.assertPlainDateTime(
  earlier.add({ hours: -12 }),
  2019, 10, "M10", 28, 22, 46, 38, 271, 986, 102,
  'symmetrical with regard to negative durations (1)'
);

const later2 = new Temporal.PlainDateTime(2020, 5, 31, 23, 12, 38, 271, 986, 102);

TemporalHelpers.assertPlainDateTime(
  later2.subtract({ hours: -2 }),
  2020, 6, "M06", 1, 1, 12, 38, 271, 986, 102,
  'symmetrical with regard to negative durations (2)'
);
