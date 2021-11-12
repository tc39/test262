// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: >
  "selectRange" basic tests when argument cannot be converted using ToNumber
info: |
  Intl.PluralRules.prototype.selectRange ( start, end )
  (...)
  4. Let x be ? ToNumber(start).
  5. Let y be ? ToNumber(end).
locale: [en-US]
features: [Intl.PluralRules-selectRange]
---*/

const pr = new Intl.PluralRules("en-US");

// Throw if arguments cannot be cast toNumber
assert.throws(TypeError, () => { pr.selectRange(Symbol(102), 201) });
assert.throws(TypeError, () => { pr.selectRange({}, -201) });
assert.throws(TypeError, () => { pr.selectRange([], 201) });
assert.throws(TypeError, () => { pr.selectRange("NaN", 201) });
assert.throws(TypeError, () => { pr.selectRange("xyz", 201) });
assert.throws(TypeError, () => { pr.selectRange(102, "NaN") });
assert.throws(TypeError, () => { pr.selectRange(102, "xyz") });
