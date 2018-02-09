// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8ClampedArray-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-detached-when-species-retrieved-same-type.template
/*---
description: Uint8ClampedArray Constructor (When a TypedArray is created from another TypedArray with the same element-type and SpeciesConstructor detaches the source buffer, AllocateArrayBuffer is still executed.)
esid: sec-typedarray-typedarray
features: [TypedArray, Symbol.species]
flags: [generated]
includes: [detachArrayBuffer.js]
info: |
    22.2.4.3 TypedArray ( typedArray )

    ...
    16. If IsSharedArrayBuffer(srcData) is false, then
        a. Let bufferConstructor be ? SpeciesConstructor(srcData, %ArrayBuffer%).
    ...
    18. If SameValue(elementType, srcType) is true, then
        a. Let data be ? CloneArrayBuffer(srcData, srcByteOffset, byteLength, bufferConstructor).
    ...

    24.1.1.4 CloneArrayBuffer ( srcBuffer, srcByteOffset, srcLength, cloneConstructor )

    ...
    3. Let targetBuffer be ? AllocateArrayBuffer(cloneConstructor, srcLength).
    4. If IsDetachedBuffer(srcBuffer) is true, throw a TypeError exception.
    ...

    24.1.1.1 AllocateArrayBuffer ( constructor, byteLength )

    1. Let obj be ? OrdinaryCreateFromConstructor(constructor, "%ArrayBufferPrototype%",
       « [[ArrayBufferData]], [[ArrayBufferByteLength]] »).
    ...

---*/



var TA = Uint8ClampedArray;
var speciesCallCount = 0;
var bufferConstructor = Object.defineProperty({}, Symbol.species, {
    get: function() {
        speciesCallCount += 1;
        $DETACHBUFFER(ta.buffer);
        return speciesConstructor;
    }
});

var prototypeCallCount = 0;
var speciesConstructor = Object.defineProperty(function(){}.bind(), "prototype", {
    get: function() {
        prototypeCallCount += 1;
        return null;
    }
});

var ta = new TA(0);
ta.buffer.constructor = bufferConstructor;

assert.throws(TypeError, function() {
    new TA(ta);
}, "TypeError thrown for detached source buffer");

assert.sameValue(speciesCallCount, 1, "@@species getter called once");
assert.sameValue(prototypeCallCount, 1, "prototype getter called once");
