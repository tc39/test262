// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: Positive and negative values in overthrow are not acceptable
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const jan31 = new Temporal.PlainDateTime(2020, 1, 31, 15, 0);

['constrain', 'reject'].forEach((overflow) => {
  assert.throws(
    RangeError,
    () => jan31.subtract({ hours: 1, minutes: -30 }, { overflow }),
    `mixed positive and negative values always throw (overflow = "${overflow}")`
  );
});
