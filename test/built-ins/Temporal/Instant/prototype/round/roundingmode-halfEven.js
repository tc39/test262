// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.round
description: Tests calculations with roundingMode "halfEven".
features: [Temporal]
---*/

const instance = new Temporal.Instant(217175010_123_456_789n /* 1976-11-18T14:23:30.123456789Z */);

const expected = [
  ["hour", 217173600_000_000_000n /* 1976-11-18T14:00:00Z */],
  ["minute", 217175040_000_000_000n /* 1976-11-18T14:24:00Z */],
  ["second", 217175010_000_000_000n /* 1976-11-18T14:23:30Z */],
  ["millisecond", 217175010_123_000_000n /* 1976-11-18T14:23:30.123Z */],
  ["microsecond", 217175010_123_457_000n /* 1976-11-18T14:23:30.123457Z */],
  ["nanosecond", 217175010_123_456_789n /* 1976-11-18T14:23:30.123456789Z */],
];

const roundingMode = "halfEven";

expected.forEach(([smallestUnit, expected]) => {
  assert.sameValue(
    instance.round({ smallestUnit, roundingMode }).epochNanoseconds,
    expected,
    `rounds to ${smallestUnit} (roundingMode = ${roundingMode})`
  );
});
