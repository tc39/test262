// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should terminate if an exception occurs converting the fromIndex to a number
includes: [Test262Error.js, testTypedArrays.js]
---*/

var fromIndex = {
    valueOf: function () {
        throw new Test262Error('This error should be re-thrown');
    }
};

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([1, 2, 3]);

    assert.throws(Test262Error, function () {
        ta.includes(2, fromIndex);
    });
});
