// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-length-is-symbol-throws.template
/*---
description: Float32Array Constructor (Throws a TypeError if length is a Symbol)
esid: sec-typedarray-buffer-byteoffset-length
features: [Symbol, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    14. Else,
      a. Let newLength be ? ToLength(length).
    ...

---*/


var buffer = new ArrayBuffer(8);
var s = Symbol("1");

var TA = Float32Array;
  assert.throws(TypeError, function() {
    new TA(buffer, 0, s);
  });
