// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should search the whole array, as the optional second argument fromIndex defaults
    to 0
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([1, 2, 3]);

    assert(ta.includes(1), 'Expected that the whole array was searched for 1 and it was found');
    assert(ta.includes(2), 'Expected that the whole array was searched for 2 and it was found');
    assert(ta.includes(3), 'Expected that the whole array was searched for 3 and it was found');
});
