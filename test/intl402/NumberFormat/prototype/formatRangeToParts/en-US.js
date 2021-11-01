// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-partitionnumberrangepattern
description: Basic tests for the en-US output of formatRangeToParts()
locale: [en-US]
features: [Intl.NumberFormat-formatRangeToParts]
---*/

// Utils fn
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

// 1. Perform ? RequireInternalSlot(nf, [[InitializedNumberFormat]])
let f = nf['formatRangeToParts'];
assert.throws(TypeError, () => { f(1, 23) });

// 2. If arguments are undefined throw a TypeError exception.
assert.throws(TypeError, () => { nf.formatRangeToParts(undefined, 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts(1,undefined) });
assert.throws(TypeError, () => { nf.formatRangeToParts(undefined, undefined)});

// 3. If arguments are "invalid" throw a TypeError exception.
assert.throws(TypeError, () => { nf.formatRangeToParts(Symbol(12), 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts({}, -23) });
assert.throws(TypeError, () => { nf.formatRangeToParts([], 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts("NaN", 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts("xyz", 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts(12, "NaN") });
assert.throws(TypeError, () => { nf.formatRangeToParts(12, "xyz") });

// 4. If x or y is NaN ..., throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRangeToParts(NaN, 23) });
assert.throws(RangeError, () => { nf.formatRangeToParts(12, NaN) });
assert.throws(RangeError, () => { nf.formatRangeToParts(NaN, NaN) });

// 5. If x is a non-finite Number ..., throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRangeToParts(-12/0, 12/0) });

// 5. If x is greater than y, throw a RangeError exception
assert.throws(RangeError, () => { nf.formatRangeToParts(23, 12) });
// x is not bigint but y is.
assert.throws(RangeError, () => { nf.formatRangeToParts(23, 12n) });
// x is bigint but y is not.
assert.throws(RangeError, () => { nf.formatRangeToParts(23n, 12) });
// both x and y are bigint.
assert.throws(RangeError, () => { nf.formatRangeToParts(23n, 12n) });

// 6. Basic example test en-US
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

