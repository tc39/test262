// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should use the SameValueZero algorithm to compare
author: Domenic Denicola
---*/

assert.sameValue([1, 2, 3].includes(2), true, 'Expected [1, 2, 3] to contain 2');
assert.sameValue([1, 2, 3].includes(4), false, 'Expected [1, 2, 3] to not contain 4');
assert.sameValue([1, 2, NaN].includes(NaN), true, 'Expected [1, 2, NaN] to contain NaN');
assert.sameValue([1, 2, -0].includes(+0), true, 'Expected [1, 2, -0] to contain +0');
assert.sameValue([1, 2, -0].includes(-0), true, 'Expected [1, 2, -0] to contain -0');
assert.sameValue([1, 2, +0].includes(-0), true, 'Expected [1, 2, +0] to contain -0');
assert.sameValue([1, 2, +0].includes(+0), true, 'Expected [1, 2, +0] to contain +0');
assert.sameValue([1, 2, -Infinity].includes(+Infinity), false, 'Expected [1, 2, -Infinity] to not contain +Infinity');
assert.sameValue([1, 2, -Infinity].includes(-Infinity), true, 'Expected [1, 2, -Infinity] to contain -Infinity');
assert.sameValue([1, 2, +Infinity].includes(-Infinity), false, 'Expected [1, 2, +Infinity] to not contain -Infinity');
assert.sameValue([1, 2, +Infinity].includes(+Infinity), true, 'Expected [1, 2, +Infinity] to contain +Infinity');
