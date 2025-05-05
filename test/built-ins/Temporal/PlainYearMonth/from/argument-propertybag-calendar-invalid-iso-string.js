// Copyright (C) 2025 Brage Hogstad, University of Bergen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.from
description: Various invalid ISO string values for calendar in a property bag
features: [Temporal]
---*/

const invalidStrings = [
  ["", "empty string"],
];
  
for (const [calendar, description] of invalidStrings) {
  const arg = { year: 2019, monthCode: "M11", calendar };
  assert.throws(
    RangeError,
    () => Temporal.PlainYearMonth.from(arg),
    `${description} is not a valid calendar ID`
  );
}
