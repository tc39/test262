// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-byteoffset-throws-from-modulo-element-size-sab.template
/*---
description: Int16Array Constructor (Throws a RangeError if ToInteger(byteOffset) modulo elementSize is not 0)
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    10. If offset modulo elementSize ≠ 0, throw a RangeError exception.
    ...

---*/


var buffer = new SharedArrayBuffer(8);

var TA = Int16Array;

if (TA.BYTES_PER_ELEMENT !== 1) {
  assert.throws(RangeError, function() {
    new TA(buffer, 7);
  });  
}
