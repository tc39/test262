// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should not have its behavior impacted by modifications to the global property
    Object
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

function fakeObject() {
    $ERROR('The overriden version of Object was called!');
}

var global = (new Function("return this;"))();
global.Object = fakeObject;
assert.sameValue(Object, fakeObject, 'Sanity check failed: could not modify the global Object');

testTypedArrays(function (TypedArrayConstructor) {
    var ta = new TypedArrayConstructor([]);

    assert.sameValue(ta.includes(1), false, 'Expected the empty typed array not to contain anything');
});
