// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.round
description: Tests calculations with roundingMode "halfFloor".
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainTime(13, 46, 23, 123, 456, 789);

const expected = [
  ["hour", [14]],
  ["minute", [13, 46]],
  ["second", [13, 46, 23]],
  ["millisecond", [13, 46, 23, 123]],
  ["microsecond", [13, 46, 23, 123, 457]],
  ["nanosecond", [13, 46, 23, 123, 456, 789]],
];

const roundingMode = "halfFloor";

expected.forEach(([smallestUnit, expected]) => {
  const [h, min = 0, s = 0, ms = 0, µs = 0, ns = 0] = expected;
  TemporalHelpers.assertPlainTime(
    instance.round({ smallestUnit, roundingMode }),
    h, min, s, ms, µs, ns,
    `rounds to ${smallestUnit} (roundingMode = ${roundingMode})`
  );
});
