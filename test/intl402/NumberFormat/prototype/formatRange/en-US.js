// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-partitionnumberrangepattern
description: Basic tests for the en-US output of formatRange()
locale: [en-US]
features: [Intl.NumberFormat-formatRange]
---*/

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// 1. Perform ? RequireInternalSlot(nf, [[InitializedNumberFormat]])
let f = nf['formatRange'];
assert.throws(TypeError, () => { f(1, 23) });

// 2. If arguments are undefined throw a TypeError exception.
assert.throws(TypeError, () => { nf.formatRange(undefined, 23) });
assert.throws(TypeError, () => { nf.formatRange(1,undefined) });
assert.throws(TypeError, () => { nf.formatRange(undefined, undefined)});

// 3. If arguments are "invalid" throw a TypeError exception.
assert.throws(TypeError, () => { nf.formatRange(Symbol(12), 23) });
assert.throws(TypeError, () => { nf.formatRange({}, -23) });
assert.throws(TypeError, () => { nf.formatRange([], 23) });
assert.throws(TypeError, () => { nf.formatRange("NaN", 23) });
assert.throws(TypeError, () => { nf.formatRange("xyz", 23) });
assert.throws(TypeError, () => { nf.formatRange(12, "NaN") });
assert.throws(TypeError, () => { nf.formatRange(12, "xyz") });

// 4. If x or y is NaN ..., throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRange(NaN, 23) });
assert.throws(RangeError, () => { nf.formatRange(12, NaN) });
assert.throws(RangeError, () => { nf.formatRange(NaN, NaN) });

// 5. If x is a non-finite Number ..., throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRange(-12/0, 12/0) });

// 5. If x is greater than y, throw a RangeError exception
assert.throws(RangeError, () => { nf.formatRange(23, 12) });
// x is not bigint but y is.
assert.throws(RangeError, () => { nf.formatRange(23, 12n) });
// x is bigint but y is not.
assert.throws(RangeError, () => { nf.formatRange(23n, 12) });
// both x and y are bigint.
assert.throws(RangeError, () => { nf.formatRange(23n, 12n) });


// 6. Basic example test en-US
const nf2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

assert.sameValue(nf2.formatRange(3, 5), "€3 – €5");
assert.sameValue(nf2.formatRange(2.9, 3.1), "~€3");


// 7. Basic example test en-US using signDisplay to always
const nf3 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  signDisplay: "always",
});

assert.sameValue(nf3.formatRange(2.9, 3.1), "~+€3.00");

// 8. Basic example test en-US string formatting
const nf4 = new Intl.NumberFormat("en-US");
const string1 = "987654321987654321";
const string2 = "987654321987654322";

assert.sameValue(nf4.formatRange(string1, string2), "987,654,321,987,654,321–987,654,321,987,654,322");

