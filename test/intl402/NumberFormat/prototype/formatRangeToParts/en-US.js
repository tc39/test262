// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRangeToParts
description: Basic tests for the en-US output of formatRangeToParts()
locale: [en-US]
features: [Intl.NumberFormat-v3]
---*/

// Utils functions
function* zip(a, b) {
  assert.sameValue(a.length, b.length);
  for (let i = 0; i < a.length; ++i) {
    yield [i, a[i], b[i]];
  }
}

function compare(actual, expected) {
  for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {
    assert.sameValue(actualEntry.type, expectedEntry.type, `type for entry ${i}`);
    assert.sameValue(actualEntry.value, expectedEntry.value, `value for entry ${i}`);
    assert.sameValue(actualEntry.source, expectedEntry.source, `source for entry ${i}`);
  }
}

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// Perform ? RequireInternalSlot(nf, [[InitializedNumberFormat]]).
let f = nf['formatRangeToParts'];
assert.throws(TypeError, () => { f(1, 23) });

// Basic example test en-US
const nf2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

compare(nf2.formatRangeToParts(3, 5), [
  {type: "currency", value: "€", source: "startRange"},
  {type: "integer", value: "3", source: "startRange"},
  {type: "literal", value: "–", source: "shared"},
  {type: "integer", value: "5", source: "endRange"},
]);
