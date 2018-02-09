// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-byteoffset-is-negative-zero-sab.template
/*---
description: Int32Array Constructor (TypedArray's [[ByteOffset]] internal slot is always a positive number, test with negative zero.)
esid: pending
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    %TypedArray% ( buffer [ , byteOffset [ , length ] ] )

    ...
    6. Let offset be ? ToInteger(byteOffset).
    7. If offset < 0, throw a RangeError exception.
    8. If offset is -0, let offset be +0.
    ...

---*/


var typedArray = new Int32Array(new SharedArrayBuffer(8), -0);
assert.sameValue(typedArray.byteOffset, +0);
