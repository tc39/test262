// Copyright 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.numberformat.prototype.format
description: Checks handling of the unit style.
locale: [ja-JP]
features: [Intl.NumberFormat-unified]
---*/

function unitSeparators(unitDisplay) {
  const nf = new Intl.NumberFormat("ja-JP", { style: "unit", unit: "kilometer-per-hour", unitDisplay });
  const parts = nf.formatToParts(1);
  const unitIndices = [];
  parts.forEach((part, i) => { if (part.type === "unit") unitIndices.push(i); });

  const prefix = unitIndices[0] === 0 && parts[1] && parts[1].type === "literal" ? parts[1].value : "";

  const lastUnitIndex = unitIndices[unitIndices.length - 1];
  const suffix = lastUnitIndex === parts.length - 1 && parts[lastUnitIndex - 1] && parts[lastUnitIndex - 1].type === "literal"
    ? parts[lastUnitIndex - 1].value
    : "";

  return { prefix, suffix };
}

const shortSep = unitSeparators("short");
const narrowSep = unitSeparators("narrow");
const longSep = unitSeparators("long");

const tests = [
  [
    -987,
    {
      "short": `-987${shortSep.suffix}km/h`,
      "narrow": `-987${narrowSep.suffix}km/h`,
      "long": `時速${longSep.prefix}-987${longSep.suffix}キロメートル`,
    }
  ],
  [
    -0.001,
    {
      "short": `-0.001${shortSep.suffix}km/h`,
      "narrow": `-0.001${narrowSep.suffix}km/h`,
      "long": `時速${longSep.prefix}-0.001${longSep.suffix}キロメートル`,
    }
  ],
  [
    -0,
    {
      "short": `-0${shortSep.suffix}km/h`,
      "narrow": `-0${narrowSep.suffix}km/h`,
      "long": `時速${longSep.prefix}-0${longSep.suffix}キロメートル`,
    }
  ],
  [
    0,
    {
      "short": `0${shortSep.suffix}km/h`,
      "narrow": `0${narrowSep.suffix}km/h`,
      "long": `時速${longSep.prefix}0${longSep.suffix}キロメートル`,
    }
  ],
  [
    0.001,
    {
      "short": `0.001${shortSep.suffix}km/h`,
      "narrow": `0.001${narrowSep.suffix}km/h`,
      "long": `時速${longSep.prefix}0.001${longSep.suffix}キロメートル`,
    }
  ],
  [
    987,
    {
      "short": `987${shortSep.suffix}km/h`,
      "narrow": `987${narrowSep.suffix}km/h`,
      "long": `時速${longSep.prefix}987${longSep.suffix}キロメートル`,
    }
  ],
];

for (const [number, expectedData] of tests) {
  for (const [unitDisplay, expected] of Object.entries(expectedData)) {
    const nf = new Intl.NumberFormat("ja-JP", { style: "unit", unit: "kilometer-per-hour", unitDisplay });
    assert.sameValue(nf.format(number), expected);
  }
}
