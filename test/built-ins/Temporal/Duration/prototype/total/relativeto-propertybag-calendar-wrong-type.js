// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.total
description: >
  Appropriate error thrown when relativeTo.calendar cannot be converted to a
  calendar object or string
features: [BigInt, Symbol, Temporal]
---*/

const instance = new Temporal.Duration(1, 0, 0, 0, 24);

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
  const relativeTo = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(
    TypeError,
    () => instance.total({ unit: "days", relativeTo }),
    `${description} is not a valid calendar`
  );
}

const typeErrorTests = [
  [Symbol(), "symbol"],
  [{}, "object"],
  [Temporal.PlainDate, "Temporal.PlainDate, object"],
  [Temporal.PlainDate.prototype, "Temporal.PlainDate.prototype, object"],
  [Temporal.ZonedDateTime, "Temporal.ZonedDateTime, object"],
  [Temporal.ZonedDateTime.prototype, "Temporal.ZonedDateTime.prototype, object"],
];

for (const [calendar, description] of typeErrorTests) {
  const relativeTo = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(TypeError, () => instance.total({ unit: "days", relativeTo }), `${description} is not a valid property bag and does not convert to a string`);
}
