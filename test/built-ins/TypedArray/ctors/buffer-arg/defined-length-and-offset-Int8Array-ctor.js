// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-defined-length-and-offset.template
/*---
description: Int8Array Constructor (Return new typedArray from defined length and offset)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

---*/


var TA = Int8Array;
var offset = TA.BYTES_PER_ELEMENT;
var buffer = new ArrayBuffer(3 * offset);

var ta1 = new TA(buffer, offset, 2);
assert.sameValue(ta1.length, 2, "ta1.length");
assert.sameValue(ta1.buffer, buffer, "ta1.buffer");
assert.sameValue(ta1.constructor, TA);
assert.sameValue(Object.getPrototypeOf(ta1), TA.prototype);

var ta2 = new TA(buffer, offset, 0);
assert.sameValue(ta2.length, 0, "ta2.length");
assert.sameValue(ta2.buffer, buffer, "ta2.buffer");
assert.sameValue(ta2.constructor, TA);
assert.sameValue(Object.getPrototypeOf(ta2), TA.prototype);
