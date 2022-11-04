// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.tostring
description: Properties on objects passed to toString() are accessed in the correct order
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const expected = [
  "get options.smallestUnit",
  "get options.smallestUnit.toString",
  "call options.smallestUnit.toString",
  "get options.roundingMode",
  "get options.roundingMode.toString",
  "call options.roundingMode.toString",
];
const actual = [];

const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);

instance.toString(
  TemporalHelpers.propertyBagObserver(actual, {
    fractionalSecondDigits: 3,
    roundingMode: "halfExpand",
    smallestUnit: "millisecond",
  }, "options"),
);
assert.compareArray(actual, expected, "order of operations");
actual.splice(0); // clear

const expectedForFractionalSecondDigits = [
  "get options.smallestUnit",
  "get options.fractionalSecondDigits",
  "get options.fractionalSecondDigits.toString",
  "call options.fractionalSecondDigits.toString",
  "get options.roundingMode",
  "get options.roundingMode.toString",
  "call options.roundingMode.toString",
];

instance.toString(
  TemporalHelpers.propertyBagObserver(actual, {
    fractionalSecondDigits: "auto",
    roundingMode: "halfExpand",
    smallestUnit: undefined,
  }, "options"),
);
assert.compareArray(actual, expectedForFractionalSecondDigits, "order of operations with smallestUnit undefined");
