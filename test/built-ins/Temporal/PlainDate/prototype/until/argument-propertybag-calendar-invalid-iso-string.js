// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.until
description: Invalid ISO string as calendar should throw RangeError
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);

const invalidStrings = [
  ["", "empty string"],
];

for (const [calendar, description] of invalidStrings) {
  const arg = { year: 1976, monthCode: "M11", day: 18, calendar };
  assert.throws(
    RangeError,
    () => instance.until(arg),
    `${description} is not a valid calendar ID`
  );
}
