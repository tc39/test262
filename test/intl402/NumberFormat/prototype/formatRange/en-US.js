// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRange
description: Basic tests for the en-US output of formatRange()
locale: [en-US]
features: [Intl.NumberFormat-formatRange]
---*/

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// Perform ? RequireInternalSlot(nf, [[InitializedNumberFormat]])
let f = nf['formatRange'];
assert.throws(TypeError, () => { f(1, 23) });

// Basic example test en-US
const nf2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

assert.sameValue(nf2.formatRange(3, 5), "€3 – €5");
assert.sameValue(nf2.formatRange(2.9, 3.1), "~€3");


// Basic example test en-US using signDisplay to always
const nf3 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  signDisplay: "always",
});

assert.sameValue(nf3.formatRange(2.9, 3.1), "~+€3.00");

// Basic example test en-US string formatting
const nf4 = new Intl.NumberFormat("en-US");
const string1 = "987654321987654321";
const string2 = "987654321987654322";

assert.sameValue(nf4.formatRange(string1, string2), "987,654,321,987,654,321–987,654,321,987,654,322");

