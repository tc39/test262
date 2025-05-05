// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: >
  Appropriate error thrown when a calendar property from a property bag cannot
  be converted to a calendar object or string
features: [BigInt, Symbol, Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2000, 5);

const wrongTypeTests = [
  [null, "null"],
  [true, "boolean"],
  [1, "number that doesn't convert to a valid ISO string"],
  [1n, "bigint"],
  [19970327, "large positive number"],
  [-19970327, "negative number"],
  [1234567890, "very large integer"],
  [Symbol(), "symbol"],
  [{}, "object"],
  [new Temporal.Duration(), "duration instance"],
];

for (const [calendar, description] of wrongTypeTests) {
  const arg = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(
    TypeError,
    () => instance.since(arg),
    `${description} does not convert to a valid ISO string`
  );
}
