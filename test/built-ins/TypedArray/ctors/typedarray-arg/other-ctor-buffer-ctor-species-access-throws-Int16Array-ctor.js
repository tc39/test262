// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-species-access-throws.template
/*---
description: Int16Array Constructor (Return abrupt from getting typedArray argument's buffer.constructor.@@species)
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
    ...

---*/


var sample1 = new Int8Array();
var sample2 = new Int16Array();

var TA = Int16Array;
var sample = TA === Int8Array ? sample2 : sample1;
var ctor = {};

sample.buffer.constructor = ctor;
Object.defineProperty(ctor, Symbol.species, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  new TA(sample);
});
