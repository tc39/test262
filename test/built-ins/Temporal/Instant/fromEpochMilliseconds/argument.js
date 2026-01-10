// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.fromepochmilliseconds
description: >
  TypeError thrown if input is of wrong primitive type.
info: |
  Temporal.Instant.fromEpochMilliseconds ( epochMilliseconds )

  1. Set epochMilliseconds to ? ToNumber(epochMilliseconds).
  ...
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.Instant.fromEpochNanoseconds(), "cannot convert NaN to number");
assert.throws(TypeError, () => Temporal.Instant.fromEpochNanoseconds(undefined), "cannot convert undefined to number");
assert.throws(TypeError, () => Temporal.Instant.fromEpochMilliseconds(42n), "BigInt cannot be converted to number");
assert.throws(TypeError, () => Temporal.Instant.fromEpochMilliseconds(Symbol()), "symbol cannot be converted to number");
