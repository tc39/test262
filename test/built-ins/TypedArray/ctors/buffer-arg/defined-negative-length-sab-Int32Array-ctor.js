// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-defined-negative-length-sab.template
/*---
description: Int32Array Constructor (Throws RangeError for negative ToInteger(length))
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

var TA = Int32Array;
assert.throws(RangeError, function() {
  new TA(buffer, 0, -1);
});

assert.throws(RangeError, function() {
  new TA(buffer, 0, -Infinity);
});
