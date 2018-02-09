// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-same-ctor-buffer-ctor-species-custom-proto-from-ctor-realm.template
/*---
description: Uint32Array Constructor (Derive the ArrayBuffer prototype from the realm of the species constructor)
esid: sec-typedarray-typedarray
features: [cross-realm, Symbol.species, TypedArray]
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

    9.1.14 GetPrototypeFromConstructor

    ...
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    ...

---*/


var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;

var TA = Uint32Array;
var sample = new TA();
var ctor = {};

sample.buffer.constructor = ctor;

ctor[Symbol.species] = C;

var typedArray = new TA(sample);
assert.sameValue(
  Object.getPrototypeOf(typedArray.buffer), other.ArrayBuffer.prototype
);
