// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Invalid ISO string as calendar in relativeTo option should throw RangeError
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC");

const invalidStrings = [
  ["", "empty string"],
  ["calendar: '1997-12-04[u-ca=iso8601]'", "ISO string with calendar annotation"],
  ["calendar: 'notacal'", "Unknown calendar"],
];

for (const [calendar, description] of invalidStrings) {
  const arg = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(
    RangeError,
    () => instance.add(new Temporal.Duration({ months: 1, days: 2}), { relativeTo: arg }),
    `${description} is not a valid calendar ID`
  );
}
