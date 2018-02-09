// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-returns-new-instance-sab.template
/*---
description: Float32Array Constructor (Return new typedArray from undefined offset and length)
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

---*/


var TA = Float32Array;
  var bpe = TA.BYTES_PER_ELEMENT;

  var buffer1 = new SharedArrayBuffer(bpe * 4);
  var ta1 = new TA(buffer1);
  assert.sameValue(ta1.length, 4);
  assert.sameValue(ta1.buffer, buffer1);
  assert.sameValue(ta1.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(ta1), TA.prototype);

  var buffer2 = new SharedArrayBuffer(0);
  var ta2 = new TA(buffer2);
  assert.sameValue(ta2.length, 0);
  assert.sameValue(ta2.buffer, buffer2);
  assert.sameValue(ta2.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(ta2), TA.prototype);
