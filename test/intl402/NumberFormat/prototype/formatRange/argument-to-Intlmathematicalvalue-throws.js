// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRange
description: >
  "formatRange" basic tests when argument cannot be converted using ToIntlMathematicalValue
info: |
  Intl.NumberFormat.prototype.formatRange( start, end )
  (...)
  4. Let x be ? ToIntlMathematicalValue(start).
  5. Let y be ? ToIntlMathematicalValue(end).
locale: [en-US]
features: [Intl.NumberFormat-formatRange]
---*/


const nf = new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"});

// Throw if arguments cannot be cast using the method ToIntlMathematicalValue
assert.throws(TypeError, () => { nf.formatRange(Symbol(12), 23) });
assert.throws(TypeError, () => { nf.formatRange({}, -23) });
assert.throws(TypeError, () => { nf.formatRange([], 23) });
assert.throws(TypeError, () => { nf.formatRange("NaN", 23) });
assert.throws(TypeError, () => { nf.formatRange("xyz", 23) });
assert.throws(TypeError, () => { nf.formatRange(12, "NaN") });
assert.throws(TypeError, () => { nf.formatRange(12, "xyz") });
