// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes lives on the shared prototype and is not equal to Array.prototype.includes
author: Domenic Denicola
includes: [testTypedArrays.js]
---*/

var taProto = Object.getPrototypeOf(Uint8Array.prototype);

assert.notSameValue(taProto, Object.prototype, 'Expected %TypedArray%.prototype to not be Object.prototype');
assert.sameValue(typeof taProto.includes, 'function', 'Expected %TypedArray%.prototype to have an includes method');
assert.notSameValue(taProto.includes, Array.prototype.includes,
    'Expected %TypedArray%.prototype.includes to be different from Array.prototype.includes');

testTypedArrays(function (TypedArrayConstructor) {
    assert.sameValue(TypedArrayConstructor.prototype.includes, taProto.includes,
        'Expected the method retrieved from the ' + TypedArrayConstructor.name + ' prototype to equal the one from ' +
        'the shared %TypedArray% prototype');
});
