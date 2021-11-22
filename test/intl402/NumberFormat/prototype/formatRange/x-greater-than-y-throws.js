// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat.prototype.formatRange
description: >
  "formatRange" basic tests when argument  x > y, BigInt included, throw a RangeError exception.
info: |
  1.1.21 PartitionNumberRangePattern( numberFormat, x, y )
  (...)
  1.1.21_2.a. If y is a mathematical value and y < x, throw a RangeError exception.
features: [Intl.NumberFormat-v3]
---*/

const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// If x > y, throw a RangeError exception.
assert.throws(RangeError, () => { nf.formatRange(23, 12) });
// If x > y, throw a RangeError exception and both x and y are bigint.
assert.throws(RangeError, () => { nf.formatRange(23n, 12n) });
