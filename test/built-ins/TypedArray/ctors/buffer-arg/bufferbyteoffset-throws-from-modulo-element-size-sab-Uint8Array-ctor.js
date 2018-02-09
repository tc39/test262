// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-bufferbyteoffset-throws-from-modulo-element-size-sab.template
/*---
description: Uint8Array Constructor (Throws a RangeError if bufferByteLength modulo elementSize ≠ 0)
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
    ...

---*/


var TA = Uint8Array;

var buffer = new SharedArrayBuffer(1);

if (TA.BYTES_PER_ELEMENT !== 1) {  
  assert.throws(RangeError, function() {
    new TA(buffer);
  });

  assert.throws(RangeError, function() {
    new TA(buffer, 0, undefined);
  });
}
