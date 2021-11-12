// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat.prototype.formatRange
description: When one only one value x or y is BigInt, throw a RangeError exception.
features: [Intl.NumberFormat-formatRange]
---*/

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// x is not bigint but y is.
assert.throws(RangeError, () => { nf.formatRange(23, 12n) });
// x is bigint but y is not.
assert.throws(RangeError, () => { nf.formatRange(23n, 12) });
