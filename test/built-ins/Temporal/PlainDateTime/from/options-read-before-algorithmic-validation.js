// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.from
description: >
  All options properties are read and cast before any algorithmic validation
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const expected = [
  "get options.overflow",
  "get options.overflow.toString",
  "call options.overflow.toString",
];
const actual = [];

const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "constrain",
}, "options");

assert.throws(RangeError, function () {
  Temporal.PlainDateTime.from({ year: 2025, monthCode: "M08L", day: 14 }, options);
}, "exception thrown when month code is invalid for calendar");
assert.compareArray(actual, expected, "all options should be read first");
