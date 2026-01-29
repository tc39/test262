// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typedarray-constructors
description: >
    TypedArray constructor throws when Symbol.iterator method throws.
info: |
    _TypedArray_ ( ..._args_ )

    4. Let _numberOfArgs_ be the number of elements in _args_.
    5. If _numberOfArgs_ = 0, then
        a. Return ? AllocateTypedArray(_constructorName_, NewTarget, _proto_, 0).
    6. Else,
        a. Let _firstArgument_ be _args_[0].
        b. If _firstArgument_ is an Object, then
            i. Let _O_ be ? AllocateTypedArray(_constructorName_, NewTarget, _proto_).
            ii. If _firstArgument_ has a [[TypedArrayName]] internal slot, then
                ...
            iii. Else if _firstArgument_ has an [[ArrayBufferData]] internal slot, then
                ...
            iv. Else,
                2. Let _usingIterator_ be ? GetMethod(_firstArgument_, %Symbol.iterator%).
                3. If _usingIterator_ is not *undefined*, then
                  a. Let _values_ be ? IteratorToList(? GetIteratorFromMethod(_firstArgument_, _usingIterator_)).
    
    GetIteratorFromMethod (_obj_,_method_)

    1. Let _iterator_ be ? Call(_method_, _obj_).

features: [TypedArray, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float16Array, Float32Array, Float64Array, Int8Array, Int16Array, Int32Array]
---*/
var TypedArrays = [
    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, 
    BigInt64Array, BigUint64Array, Float16Array, Float32Array, Float64Array
];

for (var i = 0; i < TypedArrays.length; i++) {
    var TypedArray = TypedArrays[i];
    assert.throws(Test262Error, function () {
        new TypedArray({[Symbol.iterator] : () => {throw new Test262Error;}});
    })
}
