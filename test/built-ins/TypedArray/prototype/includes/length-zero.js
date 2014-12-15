// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should always return false on zero-length typed arrays
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([]);

    assert.sameValue(ta.includes(2), false, 'Expected empty typed array to not contain 2');
    assert.sameValue(ta.includes(), false, 'Expected empty typed array to not contain (no argument passed)');
    assert.sameValue(ta.includes(undefined), false, 'Expected empty typed array to not contain undefined');
    assert.sameValue(ta.includes(NaN), false, 'Expected empty typed array to not contain NaN');
});

