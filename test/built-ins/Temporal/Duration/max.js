// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration
description: Maximum values of arguments to the Duration constructor
features: [Temporal]
---*/

const cases = [
  [new Temporal.Duration(0, 0, 0, 104249991374, 7, 36, 31, 999, 999, 999), "max days", 9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, 0, 2501999792983, 36, 31, 999, 999, 999), "max hours", 9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, 0, 0, 150119987579016, 31, 999, 999, 999), "max minutes", 9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, 0, 0, 0, 9007199254740991, 999, 999, 999), "max seconds", 9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, -104249991374, -7, -36, -31, -999, -999, -999), "min days", -9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, 0, -2501999792983, -36, -31, -999, -999, -999), "min hours", -9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, 0, 0, -150119987579016, -31, -999, -999, -999), "min minutes", -9007199254740991.999999999],
  [new Temporal.Duration(0, 0, 0, 0, 0, 0, -9007199254740991, -999, -999, -999), "min seconds", -9007199254740991.999999999],
];

for (const [d, descr, expected] of cases) {
  assert.sameValue(d.total("seconds"), expected, descr);
}
