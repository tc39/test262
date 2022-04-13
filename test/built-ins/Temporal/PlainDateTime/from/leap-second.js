// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.from
description: Leap seconds may be accepted or rejected
features: [Temporal]
includes: [temporalHelpers.js]
---*/

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from("2016-12-31T23:59:60"),
  2016, 12, "M12", 31, 23, 59, 59, 0, 0, 0,
  "ISO string with leap second is constrained"
);

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from("2016-12-31T23:59:60", {overflow: "reject"}),
  2016, 12, "M12", 31, 23, 59, 59, 0, 0, 0,
  "ISO string with leap second is constrained (overflow = reject)"
);

const leap = {year: 2016, month: 12, day: 31, hour: 23, minute: 59, second: 60};

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from(leap),
  2016, 12, "M12", 31, 23, 59, 59, 0, 0, 0,
  "constrain leap second"
);

assert.throws(
  RangeError,
  () => Temporal.PlainDateTime.from(leap, {overflow: "reject"}),
  "reject leap second (plain object argument)"
);
