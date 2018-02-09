// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8ClampedArray-ctor.case
// - src/TypedArrays/ctors/buffer-arg-defined-negative-length-sab.template
/*---
description: Uint8ClampedArray Constructor (Throws RangeError for negative ToInteger(length))
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

---*/


var buffer = new SharedArrayBuffer(16);

var TA = Uint8ClampedArray;
assert.throws(RangeError, function() {
  new TA(buffer, 0, -1);
});

assert.throws(RangeError, function() {
  new TA(buffer, 0, -Infinity);
});
