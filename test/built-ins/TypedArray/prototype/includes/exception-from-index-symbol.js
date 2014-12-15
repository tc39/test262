// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should terminate if ToNumber ends up being called on a symbol fromIndex
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([1, 2, 3]);

    assert.throws(TypeError, function () {
        ta.includes(2, Symbol());
    });
});
