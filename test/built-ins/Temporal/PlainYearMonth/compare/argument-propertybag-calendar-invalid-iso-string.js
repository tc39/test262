// Copyright (C) 2025 Brage Hogstad, University of Bergen. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.compare
description: Invalid ISO string as calendar should throw RangeError
features: [Temporal]
---*/

const invalidStrings = [
  ["", "empty string"],
];
  
for (const [calendar, description] of invalidStrings) {
  const arg = { year: 2019, monthCode: "M06", calendar };
  assert.throws(
    RangeError,
    () => Temporal.PlainYearMonth.compare(arg, new Temporal.PlainYearMonth(2019, 6)),
    `${description} is not a valid calendar ID (first argument)`
  );
  assert.throws(
    RangeError,
    () => Temporal.PlainYearMonth.compare(new Temporal.PlainYearMonth(2019, 6), arg),
    `${description} is not a valid calendar ID (second argument)`
  );
}
