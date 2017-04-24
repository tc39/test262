// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should not have its behavior impacted by modifications to the global property
    Number
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

function fakeNumber() {
    $ERROR('The overriden version of fakeNumber was called!');
}

var global = (new Function("return this;"))();
global.Number = fakeNumber;
assert.sameValue(Number, fakeNumber, 'Sanity check failed: could not modify the global Number');

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([]);

    assert.sameValue(ta.includes(1), false, 'Expected the empty typed array not to contain anything');
});
