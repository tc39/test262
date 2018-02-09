// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-is-referenced.template
/*---
description: Float64Array Constructor (Reuse buffer argument instead of making a new clone)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    15. Set O's [[ViewedArrayBuffer]] internal slot to buffer.
    ...

---*/


var TA = Float64Array;
  var bpe = TA.BYTES_PER_ELEMENT;

  var buffer = new ArrayBuffer(bpe);

  var ta1 = new TA(buffer);
  var ta2 = new TA(buffer);

  assert.sameValue(ta1.buffer, buffer);
  assert.sameValue(ta2.buffer, buffer);
  assert.sameValue(ta1.buffer, ta2.buffer);
