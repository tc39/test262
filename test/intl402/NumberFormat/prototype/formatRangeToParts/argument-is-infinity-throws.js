// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRangeToParts
description: Throws a RangeError exception if start or end argument is cast to an Infinity value.
locale: [en-US]
features: [Intl.NumberFormat-v3]
---*/

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// 5. If x or y is a non-finite Number ..., throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRangeToParts(-12/0, 12/0) }, "-Infinity/Infinity");
assert.throws(RangeError, () => { nf.formatRangeToParts(Infinity, 10)  }, "Infinity/Number");
assert.throws(RangeError, () => { nf.formatRangeToParts(-Infinity, 10) }, "-Infinity/Number");
assert.throws(RangeError, () => { nf.formatRangeToParts(10, Infinity)  }, "Number/Infinity");
assert.throws(RangeError, () => { nf.formatRangeToParts(10, -Infinity) }, "Number/-Infinity");
assert.throws(RangeError, () => { nf.formatRangeToParts(Infinity, Infinity) }, "Infinity/Infinity");
assert.throws(RangeError, () => { nf.formatRangeToParts(-Infinity, -Infinity) }, "-Infinity/-Infinity");
