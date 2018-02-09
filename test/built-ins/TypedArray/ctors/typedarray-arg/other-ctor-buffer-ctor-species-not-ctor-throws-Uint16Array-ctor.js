// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-species-not-ctor-throws.template
/*---
description: Uint16Array Constructor (Return abrupt from buffer.constructor.@@species.prototype)
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
    7. If IsConstructor(S) is true, return S.
    8. Throw a TypeError exception.

---*/


var sample1 = new Int8Array();
var sample2 = new Int16Array();

var ctor = function() {
  throw new Test262Error();
};
var m = { m() {} }.m;
ctor[Symbol.species] = m;

var TA = Uint16Array;
var sample = TA === Int8Array ? sample2 : sample1;

sample.buffer.constructor = ctor;

assert.throws(TypeError, function() {
  new TA(sample);
});
