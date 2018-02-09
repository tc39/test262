// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-excessive-length-throws.template
/*---
description: Uint16Array Constructor (If offset + newByteLength > bufferByteLength, throw a RangeError exception.)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
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


var TA = Uint16Array;
var bpe = TA.BYTES_PER_ELEMENT;
var buffer = new ArrayBuffer(bpe);

assert.throws(RangeError, function() {
  new TA(buffer, 0, bpe * 2);
});
