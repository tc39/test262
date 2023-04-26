// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.subtract
description: Maximum allowed duration
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(1970, 1, 1);

const maxCases = [
  ["P100000001DT23H59M59.999999999S", "string with max days"],
  [{ days: 100000001, nanoseconds: 86399999999999 }, "property bag with max days"],
  ["PT2400000047H59M59.999999999S", "string with max hours"],
  [{ hours: 2400000047, nanoseconds: 3599999999999 }, "property bag with max hours"],
  ["PT144000002879M59.999999999S", "string with max minutes"],
  [{ minutes: 144000002879, nanoseconds: 59999999999 }, "property bag with max minutes"],
  ["PT8640000172799.999999999S", "string with max seconds"],
  [{ seconds: 8640000172799, nanoseconds: 999999999 }, "property bag with max seconds"],
];

for (const [arg, descr] of maxCases) {
  const result = instance.subtract(arg);
  TemporalHelpers.assertPlainDate(result, -271821, 4, "M04", 19, `operation succeeds with ${descr}`);
}

const minCases = [
  ["-P100000000DT23H59M59.999999999S", "string with min days"],
  [{ days: -100000000, nanoseconds: -86399999999999 }, "property bag with min days"],
  ["-PT2400000023H59M59.999999999S", "string with min hours"],
  [{ hours: -2400000023, nanoseconds: -3599999999999 }, "property bag with min hours"],
  ["-PT144000001439M59.999999999S", "string with min minutes"],
  [{ minutes: -144000001439, nanoseconds: -59999999999 }, "property bag with min minutes"],
  ["-PT8640000086399.999999999S", "string with min seconds"],
  [{ seconds: -8640000086399, nanoseconds: -999999999 }, "property bag with min seconds"],
];

for (const [arg, descr] of minCases) {
  const result = instance.subtract(arg);
  TemporalHelpers.assertPlainDate(result, 275760, 9, "M09", 13, `operation succeeds with ${descr}`);
}
