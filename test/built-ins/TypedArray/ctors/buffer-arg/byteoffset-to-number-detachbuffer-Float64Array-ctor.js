// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-byteoffset-to-number-detachbuffer.template
/*---
description: Float64Array Constructor (If TypedArray() is passed a detached buffer, throw)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
flags: [generated]
includes: [detachArrayBuffer.js]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    ...
    9. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
    ...

---*/


var TA = Float64Array;
var offset = TA.BYTES_PER_ELEMENT;
var buffer = new ArrayBuffer(3 * offset);
var byteOffset = { valueOf() { $DETACHBUFFER(buffer); return offset; } };
assert.throws(TypeError, () => new TA(buffer, byteOffset));
