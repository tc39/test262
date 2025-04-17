// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.compare
description: >
  Appropriate error thrown when a calendar property from a property bag cannot
  be converted to a calendar ID
features: [BigInt, Symbol, Temporal]
---*/

const datetime = new Temporal.ZonedDateTime(0n, "UTC");

const primitiveTests = [
  [null, "null"],
  [true, "boolean"],
  [1, "number"],
  [1n, "bigint"],
  [19970327, "large number"],
  [-19970327, "negative number"],
  [1234567890, "very large integer"],
];

for (const [calendar, description] of primitiveTests) {
  const arg = { year: 1970, monthCode: "M01", day: 1, calendar, timeZone: "UTC" };
  assert.throws(
    TypeError,
    () => Temporal.ZonedDateTime.compare(arg, datetime),
    `${description} is not a valid calendar (first argument)`
  );
  assert.throws(
    TypeError,
    () => Temporal.ZonedDateTime.compare(datetime, arg),
    `${description} is not a valid calendar (second argument)`
  );
}

const typeErrorTests = [
  [Symbol(), "symbol"],
  [{}, "object"],
  [new Temporal.Duration(), "duration instance"],
];

for (const [calendar, description] of typeErrorTests) {
  const arg = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(
    TypeError,
    () => Temporal.ZonedDateTime.compare(arg, datetime),
    `${description} is not a valid property bag and does not convert to a string (first argument)`
  );
  assert.throws(
    TypeError,
    () => Temporal.ZonedDateTime.compare(datetime, arg),
    `${description} is not a valid property bag and does not convert to a string (second argument)`
  );
}
