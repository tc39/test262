// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes searches the whole array if the computed index from the given negative fromIndex
    argument is less than 0
author: Domenic Denicola
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([1, 3]);

    assert(ta.includes(1, -4), 'Expected that the whole array was searched');
    assert(ta.includes(1, -4), 'Expected that the whole array was searched');
});
