// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.add
description: Invalid ISO string as calendar in relativeTo option should throw RangeError
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 5, 2, 15, 23, 30, 987, 654, 321);

const invalidStrings = [
  ["", "empty string"],
  ["1997-12-04[u-ca=notacal]", "Unknown calendar"],
];

for (const [arg, description] of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.add(new Temporal.Duration({ months: 1, days: 2, hours: 3}), { relativeTo: arg }),
    `${description} is not a valid calendar ID`
  );
}

