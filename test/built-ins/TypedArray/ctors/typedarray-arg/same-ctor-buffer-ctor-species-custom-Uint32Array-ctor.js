// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-same-ctor-buffer-ctor-species-custom.template
/*---
description: Uint32Array Constructor (Use default ArrayBuffer constructor on undefined buffer.constructor.@@species)
esid: sec-typedarray-typedarray
features: [Symbol.species, TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    17. If SameValue(elementType, srcType) is true, then
      a. Let data be ? CloneArrayBuffer(srcData, srcByteOffset).
    ...

    24.1.1.4 CloneArrayBuffer ( srcBuffer, srcByteOffset [ , cloneConstructor ] )

    ...
    2. If cloneConstructor is not present, then
      a. Let cloneConstructor be ? SpeciesConstructor(srcBuffer, %ArrayBuffer%).
    ...

    7.3.20 SpeciesConstructor ( O, defaultConstructor )

    ...
    5. Let S be ? Get(C, @@species).
    6. If S is either undefined or null, return defaultConstructor.
    7. If IsConstructor(S) is true, return S.
    ...

    24.1.1.4 CloneArrayBuffer ( srcBuffer, srcByteOffset [ , cloneConstructor ] )

    ...
    8. Let targetBuffer be ? AllocateArrayBuffer(cloneConstructor, cloneLength).
    ...

---*/


var TA = Uint32Array;
var sample = new TA();
var ctor = {};
var called = 0;
var custom = {};

sample.buffer.constructor = ctor;

ctor[Symbol.species] = function() {
  called++;
};

ctor[Symbol.species].prototype = custom;

var typedArray = new TA(sample);
assert.sameValue(Object.getPrototypeOf(typedArray.buffer), custom);
assert.sameValue(called, 0);
