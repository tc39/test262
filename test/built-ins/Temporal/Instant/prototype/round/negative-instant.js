// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.round
description: >
  RoundNumberToIncrementAsIfPositive should multiply the remainder by an extra sign
  before comparing it
features: [Temporal]
---*/

const instance = new Temporal.Instant(-1000000000000000000n);  // 1938-04-24T22:13:20Z
const roundedDown = new Temporal.Instant(-1000000800000000000n); // 1938-04-24T22:00:00Z
const roundedUp = new Temporal.Instant(-999997200000000000n); // 1938-04-24T23:00:00Z

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "halfCeil" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with halfCeil rounds to the closest hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "halfFloor" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with halfFloor rounds to the closest hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "halfExpand" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with halfExpand rounds to the closest hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "halfTrunc" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with halfTrunc rounds to the closest hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "halfEven" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with halfEven rounds to the closest hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "ceil" }).epochNanoseconds,
  roundedUp.epochNanoseconds,
  "Rounding with ceil rounds to the next hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "floor" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with floor rounds to the closest hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "expand" }).epochNanoseconds,
  roundedUp.epochNanoseconds,
  "Rounding with expand rounds to the next hour"
);

assert.sameValue(
  instance.round({ smallestUnit: "hour", roundingIncrement: 1, roundingMode: "trunc" }).epochNanoseconds,
  roundedDown.epochNanoseconds,
  "Rounding with trunc rounds to the closest hour"
);
