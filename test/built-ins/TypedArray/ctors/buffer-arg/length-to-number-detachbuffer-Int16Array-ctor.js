// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-length-to-number-detachbuffer.template
/*---
description: Int16Array Constructor (If TypedArray() is passed a detached buffer, throw)
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


var TA = Int16Array;
var offset = TA.BYTES_PER_ELEMENT;
var buffer = new ArrayBuffer(3 * offset);
var len = { valueOf() { $DETACHBUFFER(buffer); return 1; } };
assert.throws(TypeError, () => new TA(buffer, 0, len));
