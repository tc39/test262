// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-defined-length-sab.template
/*---
description: Int16Array Constructor (Return new typedArray from defined length)
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

---*/


var TA = Int16Array;
var bpe = TA.BYTES_PER_ELEMENT;
var len = 4;
var buffer = new SharedArrayBuffer(bpe * len * 4);

var ta1 = new TA(buffer, 0, len);
assert.sameValue(ta1.length, len);
assert.sameValue(ta1.buffer, buffer);
assert.sameValue(ta1.constructor, TA);
assert.sameValue(Object.getPrototypeOf(ta1), TA.prototype);

var ta2 = new TA(buffer, 0, 0);
assert.sameValue(ta2.length, 0);
assert.sameValue(ta2.buffer, buffer);
assert.sameValue(ta2.constructor, TA);
assert.sameValue(Object.getPrototypeOf(ta2), TA.prototype);
