// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: Basic tests for the output of selectRange()
features: [Intl.PluralRules-selectRange]
---*/

const pr = new Intl.PluralRules("en-US");

// 1. Perform ? RequireInternalSlot(pr, [[InitializedPluralRules]])
let p = pr['selectRange'];
assert.throws(TypeError, () => { p(1, 201) });

// 2. If arguments are undefined throw a TypeError exception.
assert.throws(TypeError, () => { pr.selectRange(undefined, 201) });
assert.throws(TypeError, () => { pr.selectRange(102, undefined) });
assert.throws(TypeError, () => { pr.selectRange(undefined, undefined)});

// 3. If arguments cannot be cast toNumber
assert.throws(TypeError, () => { pr.selectRange(Symbol(102), 201) });
assert.throws(TypeError, () => { pr.selectRange({}, -201) });
assert.throws(TypeError, () => { pr.selectRange([], 201) });
assert.throws(TypeError, () => { pr.selectRange("NaN", 201) });
assert.throws(TypeError, () => { pr.selectRange("xyz", 201) });
assert.throws(TypeError, () => { pr.selectRange(102, "NaN") });
assert.throws(TypeError, () => { pr.selectRange(102, "xyz") });

// 4. If x > y, throw a RangeError exception.
assert.throws(RangeError, () => { pr.selectRange(201, 102) });
