// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat.prototype.formatToParts
description: Checks the behavior of Intl.RelativeTimeFormat.prototype.formatToParts() in English.
features: [Intl.RelativeTimeFormat]
locale: [en-US]
---*/

function verifyFormatParts(actual, expected, message) {
  assert.sameValue(actual.length, expected.length, `${message}: length`);

  for (let i = 0; i < actual.length; ++i) {
    assert.sameValue(actual[i].type, expected[i].type, `${message}: parts[${i}].type`);
    assert.sameValue(actual[i].value, expected[i].value, `${message}: parts[${i}].value`);
    assert.sameValue(actual[i].unit, expected[i].unit, `${message}: parts[${i}].unit`);
  }
}

const units = {
  "second": "sec.",
  "minute": "min.",
  "hour": "hr.",
  "day": undefined,
  "week": "wk.",
  "month": "mo.",
  "quarter": "qtr.",
  "year": "yr.",
};

const rtf = new Intl.RelativeTimeFormat("en-US", {
  "style": "short",
});

assert.sameValue(typeof rtf.formatToParts, "function", "formatToParts should be supported");

for (const [unitArgument, unitString] of Object.entries(units)) {
  const singular = unitString || `${unitArgument}`;
  const plural = unitString || `${unitArgument}s`;

  verifyFormatParts(rtf.formatToParts(1000, unitArgument), [
    { "type": "literal", "value": "in " },
    { "type": "integer", "value": "1,000", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural}` },
  ], `formatToParts(1000, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(10, unitArgument), [
    { "type": "literal", "value": "in " },
    { "type": "integer", "value": "10", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural}` },
  ], `formatToParts(10, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(2, unitArgument), [
    { "type": "literal", "value": "in " },
    { "type": "integer", "value": "2", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural}` },
  ], `formatToParts(2, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(1, unitArgument), [
    { "type": "literal", "value": "in " },
    { "type": "integer", "value": "1", "unit": unitArgument },
    { "type": "literal", "value": ` ${singular}` },
  ], `formatToParts(1, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(0, unitArgument), [
    { "type": "literal", "value": "in " },
    { "type": "integer", "value": "0", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural}` },
  ], `formatToParts(0, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(-0, unitArgument), [
    { "type": "integer", "value": "0", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural} ago` },
  ], `formatToParts(-0, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(-1, unitArgument), [
    { "type": "integer", "value": "1", "unit": unitArgument },
    { "type": "literal", "value": ` ${singular} ago` },
  ], `formatToParts(-1, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(-2, unitArgument), [
    { "type": "integer", "value": "2", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural} ago` },
  ], `formatToParts(-2, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(-10, unitArgument), [
    { "type": "integer", "value": "10", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural} ago` },
  ], `formatToParts(-10, ${unitArgument})`);

  verifyFormatParts(rtf.formatToParts(-1000, unitArgument), [
    { "type": "integer", "value": "1,000", "unit": unitArgument },
    { "type": "literal", "value": ` ${plural} ago` },
  ], `formatToParts(-1000, ${unitArgument})`);
}
