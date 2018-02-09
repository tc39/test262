// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-species-null.template
/*---
description: Int16Array Constructor (Use default ArrayBuffer constructor on null buffer.constructor.@@species)
esid: sec-typedarray-typedarray
features: [Symbol.species, TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    18. Else,
      a. Let bufferConstructor be ? SpeciesConstructor(srcData, %ArrayBuffer%).
    ...

    7.3.20 SpeciesConstructor ( O, defaultConstructor )

    ...
    5. Let S be ? Get(C, @@species).
    6. If S is either undefined or null, return defaultConstructor.
    ...

---*/


var TA = Int16Array;
var OtherCtor = TA === Int8Array ? Int16Array : Int8Array;
var sample = new OtherCtor();
var ctor = {};

sample.buffer.constructor = ctor;

ctor[Symbol.species] = null;
var typedArray = new TA(sample);

assert.sameValue(
  Object.getPrototypeOf(typedArray.buffer),
  ArrayBuffer.prototype,
  "buffer ctor is not called when species is null"
);
