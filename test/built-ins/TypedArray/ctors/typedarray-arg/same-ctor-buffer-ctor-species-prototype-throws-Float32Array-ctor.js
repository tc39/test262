// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-same-ctor-buffer-ctor-species-prototype-throws.template
/*---
description: Float32Array Constructor (Return abrupt from buffer.constructor.@@species.prototype)
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
    8. Let targetBuffer be ? AllocateArrayBuffer(cloneConstructor, cloneLength).
    ...

    7.3.20 SpeciesConstructor ( O, defaultConstructor )

    ...
    5. Let S be ? Get(C, @@species).
    6. If S is either undefined or null, return defaultConstructor.
    7. If IsConstructor(S) is true, return S.
    ...

    24.1.1.1 AllocateArrayBuffer ( constructor, byteLength )

    ...
    1. Let obj be ? OrdinaryCreateFromConstructor(constructor,
    "%ArrayBufferPrototype%", « [[ArrayBufferData]], [[ArrayBufferByteLength]] » )
    ...

---*/


var TA = Float32Array;
var sample = new TA();
var ctor = {};

sample.buffer.constructor = ctor;

ctor[Symbol.species] = function(){}.bind(null);
Object.defineProperty(ctor[Symbol.species], "prototype", {
  get() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  new TA(sample);
});
