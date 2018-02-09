// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-same-ctor-buffer-ctor-access-throws.template
/*---
description: Float32Array Constructor (Return abrupt completion from getting typedArray argument's buffer.constructor)
esid: sec-typedarray-typedarray
features: [TypedArray]
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
    2. Let C be ? Get(O, "constructor").
    ...

---*/


var TA = Float32Array;
var sample = new TA();
Object.defineProperty(sample.buffer, "constructor", {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  new TA(sample);
});
