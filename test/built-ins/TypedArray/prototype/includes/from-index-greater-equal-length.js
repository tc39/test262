// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes returns false if fromIndex is greater or equal to the length of the array
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([1, 2]);

    assert.sameValue(ta.includes(2, 3), false, 'Expected that the array was not searched');
    assert.sameValue(ta.includes(2, 2), false, 'Expected that the array was not searched');
});
