// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.add
description: >
  A property bag missing optional properties is equivalent to a property bag
  with all the optional properties having their default values
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.Duration();

const oneProperty = {
  hours: 1,
};
const allProperties = {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 1,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  microseconds: 0,
  nanoseconds: 0,
};
const resultWithout = instance.add(oneProperty);
const resultWith = instance.add(allProperties);
TemporalHelpers.assertDurationsEqual(resultWithout, resultWith, "results should be the same with and without optional properties");
