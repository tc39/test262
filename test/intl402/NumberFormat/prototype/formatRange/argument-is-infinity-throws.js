// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRange
description: Throws a RangeError exception if start or end argument is cast to an Infinity value.
locale: [en-US]
features: [Intl.NumberFormat-formatRange]
---*/

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// 5. If x or y is a non-finite Number ..., throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRange(-12/0, 12/0) }, "-Infinity/Infinity");
assert.throws(RangeError, () => { nf.formatRange(Infinity, 10)  }, "Infinity/Number");
assert.throws(RangeError, () => { nf.formatRange(-Infinity, 10) }, "-Infinity/Number");
assert.throws(RangeError, () => { nf.formatRange(10, Infinity)  }, "Number/Infinity");
assert.throws(RangeError, () => { nf.formatRange(10, -Infinity) }, "Number/-Infinity");
assert.throws(RangeError, () => { nf.formatRange(Infinity, Infinity) }, "Infinity/Infinity");
assert.throws(RangeError, () => { nf.formatRange(-Infinity, -Infinity) }, "-Infinity/-Infinity");
