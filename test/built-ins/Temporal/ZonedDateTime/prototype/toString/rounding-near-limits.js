// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.tostring
description: toString rounding does not put the epoch nanoseconds out of range
features: [Temporal]
---*/

const min = new Temporal.ZonedDateTime(-8_640_000_000_000_000_000_000n, "UTC");
const max = new Temporal.ZonedDateTime(8_640_000_000_000_000_000_000n, "UTC");
const justBeforeMax = new Temporal.ZonedDateTime(8_639_999_999_999_999_999_999n, "UTC");
const justAfterMin = new Temporal.ZonedDateTime(-8_639_999_999_999_999_999_999n, "UTC");

const halfRoundingModes = ["halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"];
const allRoundingModes = ["ceil", "floor", "expand", "trunc"].concat(halfRoundingModes);
const towardMaxRoundingModes = ["ceil", "expand"].concat(halfRoundingModes);
const towardMinRoundingModes = ["floor", "trunc"].concat(halfRoundingModes);

const noDecimalCases = [
  ["smallestUnit second", { smallestUnit: "second" }],
  ["fractionalSecondDigits 0", { fractionalSecondDigits: 0 }],
];
const decimalCases = [
  ["smallestUnit millisecond", { smallestUnit: "millisecond" }, 3],
  ["smallestUnit microsecond", { smallestUnit: "microsecond" }, 6],
];
for (let digits = 1; digits <= 8; digits++) {
  decimalCases.push([`fractionalSecondDigits ${digits}`, { fractionalSecondDigits: digits }, digits]);
}
// With nanosecond precision, the input value is already a multiple of the
// rounding increment, so it is not rounded at all.
const noRoundingCases = [
  ["smallestUnit nanosecond", { smallestUnit: "nanosecond" }],
  ["fractionalSecondDigits 9", { fractionalSecondDigits: 9 }],
];

for (const roundingMode of allRoundingModes) {
  assert.sameValue(
    min.toString({ smallestUnit: "minute", roundingMode }),
    "-271821-04-20T00:00+00:00[UTC]",
    `smallestUnit minute with roundingMode ${roundingMode} at the minimum`,
  );
  assert.sameValue(
    max.toString({ smallestUnit: "minute", roundingMode }),
    "+275760-09-13T00:00+00:00[UTC]",
    `smallestUnit minute with roundingMode ${roundingMode} at the maximum`,
  );

  for (const [label, options] of noDecimalCases) {
    assert.sameValue(
      min.toString({ ...options, roundingMode }),
      "-271821-04-20T00:00:00+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} at the minimum`
    );
    assert.sameValue(
      max.toString({ ...options, roundingMode }),
      "+275760-09-13T00:00:00+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} at the maximum`
    );
  }

  for (const [label, options, precision] of decimalCases) {
    assert.sameValue(
      min.toString({ ...options, roundingMode }),
      `-271821-04-20T00:00:00.${"0".repeat(precision)}+00:00[UTC]`,
      `${label} with roundingMode ${roundingMode} at the minimum`
    );
    assert.sameValue(
      max.toString({ ...options, roundingMode }),
      `+275760-09-13T00:00:00.${"0".repeat(precision)}+00:00[UTC]`,
      `${label} with roundingMode ${roundingMode} at the maximum`
    );
  }

  for (const [label, options] of noRoundingCases) {
    assert.sameValue(
      min.toString({ ...options, roundingMode }),
      "-271821-04-20T00:00:00.000000000+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} at the minimum`
    );
    assert.sameValue(
      max.toString({ ...options, roundingMode }),
      "+275760-09-13T00:00:00.000000000+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} at the maximum`
    );
  }
}

for (const roundingMode of towardMaxRoundingModes) {
  assert.sameValue(
    justBeforeMax.toString({ smallestUnit: "minute", roundingMode }),
    "+275760-09-13T00:00+00:00[UTC]",
    `smallestUnit minute with roundingMode ${roundingMode} near the maximum`
  );

  for (const [label, options] of noDecimalCases) {
    assert.sameValue(
      justBeforeMax.toString({ ...options, roundingMode }),
      "+275760-09-13T00:00:00+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} near the maximum`
    )
  }

  for (const [label, options, precision] of decimalCases) {
    assert.sameValue(
      justBeforeMax.toString({ ...options, roundingMode }),
      `+275760-09-13T00:00:00.${"0".repeat(precision)}+00:00[UTC]`,
      `${label} with roundingMode ${roundingMode} near the maximum`
    );
  }

  for (const [label, options] of noRoundingCases) {
    assert.sameValue(
      justBeforeMax.toString({ ...options, roundingMode }),
      "+275760-09-12T23:59:59.999999999+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} near the maximum`
    );
  }
}

for (const roundingMode of towardMinRoundingModes) {
  assert.sameValue(
    justAfterMin.toString({ smallestUnit: "minute", roundingMode }),
    "-271821-04-20T00:00+00:00[UTC]",
    `smallestUnit minute with roundingMode ${roundingMode} near the minimum`
  );

  for (const [label, options] of noDecimalCases) {
    assert.sameValue(
      justAfterMin.toString({ ...options, roundingMode }),
      "-271821-04-20T00:00:00+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} near the maximum`
    )
  }

  for (const [label, options, precision] of decimalCases) {
    assert.sameValue(
      justAfterMin.toString({ ...options, roundingMode }),
      `-271821-04-20T00:00:00.${"0".repeat(precision)}+00:00[UTC]`,
      `${label} with roundingMode ${roundingMode} near the minimum`
    );
  }

  for (const [label, options] of noRoundingCases) {
    assert.sameValue(
      justAfterMin.toString({ ...options, roundingMode }),
      "-271821-04-20T00:00:00.000000001+00:00[UTC]",
      `${label} with roundingMode ${roundingMode} near the maximum`
    );
  }
}

assert.sameValue(
  new Temporal.ZonedDateTime(8_639_999_999_999_999_999_999n, "+23:59").toString({
    smallestUnit: "minute",
    roundingMode: "ceil"
  }),
  "+275760-09-13T23:59+23:59[+23:59]",
  "rounding up near the maximum in a positive offset time zone"
);
assert.sameValue(
  new Temporal.ZonedDateTime(-8_639_999_999_999_999_999_999n, "-23:59").toString({
    smallestUnit: "minute",
    roundingMode: "floor"
  }),
  "-271821-04-19T00:01-23:59[-23:59]",
  "rounding down near the minimum in a negative offset time zone"
);
