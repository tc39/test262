// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-excessive-length-throws-sab.template
/*---
description: Int32Array Constructor (If offset + newByteLength > bufferByteLength, throw a RangeError exception.)
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    14. Else,
      a. Let newLength be ? ToLength(length).
      b. Let newByteLength be newLength × elementSize.
      c. If offset+newByteLength > bufferByteLength, throw a RangeError exception.
    ...

---*/


var TA = Int32Array;
var bpe = TA.BYTES_PER_ELEMENT;
var buffer = new SharedArrayBuffer(bpe);

assert.throws(RangeError, function() {
  new TA(buffer, 0, bpe * 2);
});
