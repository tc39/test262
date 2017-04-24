// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should use a negative value as the offset from the end of the array to compute
    fromIndex
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([12, 13]);

    assert.sameValue(ta.includes(13, -1), true, 'Expected to find 13');
    assert.sameValue(ta.includes(12, -1), false, 'Should not find 12');
    assert.sameValue(ta.includes(12, -2), true, 'Should find 12');
});
