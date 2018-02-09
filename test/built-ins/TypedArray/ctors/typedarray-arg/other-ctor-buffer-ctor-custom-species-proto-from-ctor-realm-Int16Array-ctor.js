// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-custom-species-proto-from-ctor-realm.template
/*---
description: Int16Array Constructor (Derive the ArrayBuffer prototype from the realm of the species constructor)
esid: sec-typedarray-typedarray
features: [cross-realm, Symbol.species, TypedArray]
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

    9.1.14 GetPrototypeFromConstructor

    ...
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    ...

---*/


var sample1 = new Int8Array();
var sample2 = new Int16Array();
var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;


var TA = Int16Array;
var sample = TA === Int8Array ? sample2 : sample1;
var ctor = {};

sample.buffer.constructor = ctor;

ctor[Symbol.species] = C;

var typedArray = new TA(sample);
assert.sameValue(
  Object.getPrototypeOf(typedArray.buffer), other.ArrayBuffer.prototype
);
