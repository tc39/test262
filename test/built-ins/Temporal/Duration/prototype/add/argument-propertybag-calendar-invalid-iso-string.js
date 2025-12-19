// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.add
description: Invalid ISO string as calendar should throw RangeError
features: [Temporal]
---*/

const instance = new Temporal.Duration(1, 0, 0, 15);

const invalidStrings = [
  ["", "empty string"],
  ["1997-12-04[u-ca=iso8601]", "ISO string with calendar annotation"],
  ["1997-12-04[u-ca=notacal]", "Unknown calendar"],
];

for (const [calendar, description] of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.add(new Temporal.Duration(0, 0, 0, 16), { relativeTo:"2025-01-01[calendar]" }),
    `${description} is not a valid calendar ID`
  );
}
