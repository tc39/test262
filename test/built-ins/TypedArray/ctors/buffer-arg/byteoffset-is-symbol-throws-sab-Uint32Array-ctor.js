// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-byteoffset-is-symbol-throws-sab.template
/*---
description: Uint32Array Constructor (Return abrupt from parsing integer value from byteOffset as a symbol)
esid: sec-typedarray-buffer-byteoffset-length
features: [Symbol, SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    7. Let offset be ? ToInteger(byteOffset).
    ...

---*/


var byteOffset = Symbol("1");
var buffer = new SharedArrayBuffer(8);

assert.throws(TypeError, function() {
  new Uint32Array(buffer, byteOffset);
});
