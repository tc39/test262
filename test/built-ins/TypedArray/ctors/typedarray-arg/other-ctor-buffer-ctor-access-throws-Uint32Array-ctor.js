// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-access-throws.template
/*---
description: Uint32Array Constructor (Return abrupt completion from getting typedArray argument's buffer.constructor)
esid: sec-typedarray-typedarray
features: [TypedArray]
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
    2. Let C be ? Get(O, "constructor").
    ...

---*/


var TA = Uint32Array;
var OtherCtor = TA === Int8Array ? Int16Array : Int8Array;
var sample = new OtherCtor();

Object.defineProperty(sample.buffer, "constructor", {
  get() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  new TA(sample);
});
