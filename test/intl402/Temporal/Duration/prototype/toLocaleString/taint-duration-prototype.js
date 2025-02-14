// Copyright 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.tolocalestring
description: >
  Ensure Temporal.Duration.prototype getters aren't called.
features: [Temporal, Intl.DurationFormat]
---*/

var duration = new Temporal.Duration(
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
);

var expected = duration.toLocaleString();

// Taint all Temporal.Duration.prototype getters.
for (var prop of [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds",
]) {
  // Ensure the property is present.
  var desc = Object.getOwnPropertyDescriptor(Temporal.Duration.prototype, prop);
  assert.notSameValue(
    desc,
    undefined,
    "Descriptor not found: " + prop
  );

  Object.defineProperty(Temporal.Duration.prototype, prop, {
    get() {
      throw new Test262Error();
    }
  });
}

var actual = duration.toLocaleString();

assert.sameValue(actual, expected);
