// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-excessive-offset-throws-sab.template
/*---
description: Int8Array Constructor (Throws a RangeError if bufferByteLength - ToInteger(byteOffset) < 0)
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    13. If length is undefined, then
      a. If bufferByteLength modulo elementSize ≠ 0, throw a RangeError exception.
      b. Let newByteLength be bufferByteLength - offset.
      c. If newByteLength < 0, throw a RangeError exception.
    ...

---*/


var TA = Int8Array;
var bpe = TA.BYTES_PER_ELEMENT;
var buffer = new SharedArrayBuffer(bpe);

assert.throws(RangeError, function() {
  new TA(buffer, bpe * 2);
});

assert.throws(RangeError, function() {
  new TA(buffer, bpe * 2, undefined);
});
