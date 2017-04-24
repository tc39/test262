// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should use the SameValueZero algorithm to compare
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays.floatOnly(function (FloatArrayConstructor) {
    assert.sameValue(new FloatArrayConstructor([1, 2, NaN]).includes(NaN), true,
        'Expected float array for [1, 2, NaN] to contain NaN');
    assert.sameValue(new FloatArrayConstructor([1, 2, -0]).includes(+0), true,
        'Expected float array for [1, 2, -0] to contain +0');
    assert.sameValue(new FloatArrayConstructor([1, 2, -0]).includes(-0), true,
        'Expected float array for [1, 2, -0] to contain -0');
    assert.sameValue(new FloatArrayConstructor([1, 2, +0]).includes(-0), true,
        'Expected float array for [1, 2, +0] to contain -0');
    assert.sameValue(new FloatArrayConstructor([1, 2, +0]).includes(+0), true,
        'Expected float array for [1, 2, +0] to contain +0');
    assert.sameValue(new FloatArrayConstructor([1, 2, -Infinity]).includes(+Infinity), false,
        'Expected float array for [1, 2, -Infinity] to not contain +Infinity');
    assert.sameValue(new FloatArrayConstructor([1, 2, -Infinity]).includes(-Infinity), true,
        'Expected float array for [1, 2, -Infinity] to contain -Infinity');
    assert.sameValue(new FloatArrayConstructor([1, 2, +Infinity]).includes(-Infinity), false,
        'Expected float array for [1, 2, +Infinity] to not contain -Infinity');
    assert.sameValue(new FloatArrayConstructor([1, 2, +Infinity]).includes(+Infinity), true,
        'Expected float array for [1, 2, +Infinity] to contain +Infinity');
});
