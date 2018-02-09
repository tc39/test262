// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-species-prototype-throws.template
/*---
description: Int32Array Constructor (Return abrupt from buffer.constructor.@@species.prototype)
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
      b. Let data be ? AllocateArrayBuffer(bufferConstructor, byteLength).
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


var sample1 = new Int8Array();
var sample2 = new Int16Array();

var TA = Int32Array;
var sample = TA === Int8Array ? sample2 : sample1;
var ctor = {};
var called = 0;

sample.buffer.constructor = ctor;

ctor[Symbol.species] = function() {called++;}.bind(null);
Object.defineProperty(ctor[Symbol.species], "prototype", {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  new TA(sample);
});
assert.sameValue(called, 0);
