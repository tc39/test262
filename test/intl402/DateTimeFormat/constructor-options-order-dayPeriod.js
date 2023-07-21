// Copyright 2019 Googe Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializedatetimeformat
description: Checks the order of getting options of 'dayPeriod' for the DateTimeFormat constructor.
includes: [compareArray.js]
features: [Intl.DateTimeFormat-dayPeriod]

---*/

// Just need to ensure dayPeriod are get between day and hour.
const expected = [
  // InitializeDateTimeFormat step 22.
  "day",
  "dayPeriod",
  "hour"
];

const actual = [];

const options = {
  get day() {
    actual.push("day");
    return "numeric";
  },
  get dayPeriod() {
    actual.push("dayPeriod");
    return "long";
  },
  get hour() {
    actual.push("hour");
    return "numeric";
  },
};

new Intl.DateTimeFormat("en", options);
assert.compareArray(actual, expected);
