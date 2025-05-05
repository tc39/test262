// Copyright (C) 2025 Brage Hogstad, University of Bergen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.constructor
description: Various invalid ISO string values for calendar
features: [Temporal]
---*/

const invalidStrings = [
  ["", "empty string"],
  ["1997-12-04[u-ca=iso8601]", "ISO string with calendar annotation"],
];

for (const [arg, description] of invalidStrings) {
  assert.throws(
    RangeError,
    () => new Temporal.PlainDate(2000, 5, 2, arg),
    `${description} is not a valid calendar ID`
  );
}
