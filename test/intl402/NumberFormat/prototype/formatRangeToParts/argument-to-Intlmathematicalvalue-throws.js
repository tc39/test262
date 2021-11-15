// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRangeToParts
description: >
  "formatRangeToParts" basic tests when argument cannot be converted using ToIntlMathematicalValue
info: |
  Intl.NumberFormat.prototype.formatRangeToParts( start, end )
  (...)
  4. Let x be ? ToIntlMathematicalValue(start).
  5. Let y be ? ToIntlMathematicalValue(end).
locale: [en-US]
features: [Intl.NumberFormat-formatRangeToParts]
---*/


const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// Throw if arguments cannot be cast using the method ToIntlMathematicalValue
assert.throws(TypeError, () => { nf.formatRangeToParts(Symbol(12), 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts({}, -23) });
assert.throws(TypeError, () => { nf.formatRangeToParts([], 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts("NaN", 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts("xyz", 23) });
assert.throws(TypeError, () => { nf.formatRangeToParts(12, "NaN") });
assert.throws(TypeError, () => { nf.formatRangeToParts(12, "xyz") });
