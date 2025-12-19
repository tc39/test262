// Copyright (C) 2025 Brage Hogstad, University of Bergen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withcalendar
description: Invalid ISO string as calendar should throw RangeError
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);

const invalidStrings = [
  ["", "empty string"],
  ["1997-12-04[u-ca=iso8601]", "ISO string with calendar annotation"],
  ["1997-12-04[u-ca=notacal]", "Unknown calendar"],
];

for (const [calendar, description] of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.withCalendar(calendar),
    `${description} is not a valid calendar ID`
  );
}
