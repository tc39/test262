// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes converts its fromIndex parameter to an integer
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([1, 2, 3]);

    assert.sameValue(ta.includes(1, 3.3), false, 'Expected that the array was not searched');

    assert.sameValue(ta.includes(1, -Infinity), true,
        'Expected the array to be searched for a fromIndex of -Infinity');
    assert.sameValue(ta.includes(3, 2.9), true,
        'Expected the fromIndex to be rounded down and thus the element to be found');
    assert.sameValue(ta.includes(3, NaN), true, 'Expected a fromIndex of NaN to be treated as 0 for an array');

    var numberLike = { valueOf: function () { return 2; } };

    assert.sameValue(ta.includes(1, numberLike), false,
        'Expected the element not to be found with the given number-like fromIndex');
    assert.sameValue(ta.includes(1, '2'), false,
        'Expected the element not to be found with the given string fromIndex');
    assert.sameValue(ta.includes(3, numberLike), true,
        'Expected the element to be found with the given number-like fromIndex');
    assert.sameValue(ta.includes(3, '2'), true,
        'Expected the element to be found with the given string fromIndex');
});
