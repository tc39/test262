// Copyright 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.numberformat.prototype.formattoparts
description: Checks handling of the unit style.
locale: [zh-TW]
features: [Intl.NumberFormat-unified]
---*/

function verifyFormatParts(actual, expected, message) {
  assert.sameValue(Array.isArray(expected), true, `${message}: expected is Array`);
  assert.sameValue(Array.isArray(actual), true, `${message}: actual is Array`);
  assert.sameValue(actual.length, expected.length, `${message}: length`);

  for (let i = 0; i < actual.length; ++i) {
    assert.sameValue(actual[i].type, expected[i].type, `${message}: parts[${i}].type`);
    assert.sameValue(actual[i].value, expected[i].value, `${message}: parts[${i}].value`);
  }
}

function unitSeparators(unitDisplay) {
  const nf = new Intl.NumberFormat("zh-TW", { style: "unit", unit: "kilometer-per-hour", unitDisplay });
  const parts = nf.formatToParts(1);
  const unitIndices = [];
  parts.forEach((part, i) => { if (part.type === "unit") unitIndices.push(i); });

  const prefix = unitIndices[0] === 0 && parts[1] && parts[1].type === "literal" ? parts[1].value : null;

  const lastUnitIndex = unitIndices[unitIndices.length - 1];
  const suffix = lastUnitIndex === parts.length - 1 && parts[lastUnitIndex - 1] && parts[lastUnitIndex - 1].type === "literal"
    ? parts[lastUnitIndex - 1].value
    : null;

  return { prefix, suffix };
}

function literalPart(value) {
  return value === null ? [] : [{ "type": "literal", "value": value }];
}

function suffixUnitParts(numberParts, unitText, sep) {
  return numberParts.concat(literalPart(sep.suffix)).concat([{ "type": "unit", "value": unitText }]);
}

function prefixSuffixUnitParts(numberParts, prefixText, suffixText, sep) {
  return [{ "type": "unit", "value": prefixText }]
    .concat(literalPart(sep.prefix))
    .concat(numberParts)
    .concat(literalPart(sep.suffix))
    .concat([{ "type": "unit", "value": suffixText }]);
}

const shortSep = unitSeparators("short");
const narrowSep = unitSeparators("narrow");
const longSep = unitSeparators("long");

const tests = [
  [
    -987,
    [{"type":"minusSign","value":"-"},{"type":"integer","value":"987"}],
  ],
  [
    -0.001,
    [{"type":"minusSign","value":"-"},{"type":"integer","value":"0"},{"type":"decimal","value":"."},{"type":"fraction","value":"001"}],
  ],
  [
    -0,
    [{"type":"minusSign","value":"-"},{"type":"integer","value":"0"}],
  ],
  [
    0,
    [{"type":"integer","value":"0"}],
  ],
  [
    0.001,
    [{"type":"integer","value":"0"},{"type":"decimal","value":"."},{"type":"fraction","value":"001"}],
  ],
  [
    987,
    [{"type":"integer","value":"987"}],
  ],
];

for (const [number, numberParts] of tests) {
  const expectedData = {
    "short": suffixUnitParts(numberParts, "公里/小時", shortSep),
    "narrow": suffixUnitParts(numberParts, "公里/小時", narrowSep),
    "long": prefixSuffixUnitParts(numberParts, "每小時", "公里", longSep),
  };

  for (const [unitDisplay, expected] of Object.entries(expectedData)) {
    const nf = new Intl.NumberFormat("zh-TW", { style: "unit", unit: "kilometer-per-hour", unitDisplay });
    verifyFormatParts(nf.formatToParts(number), expected, `${number} ${unitDisplay}`);
  }
}
