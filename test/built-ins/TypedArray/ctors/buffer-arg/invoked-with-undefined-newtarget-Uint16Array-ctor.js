// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-invoked-with-undefined-newtarget.template
/*---
description: Uint16Array Constructor (Throws a TypeError if NewTarget is undefined.)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    2. If NewTarget is undefined, throw a TypeError exception.
    ...

---*/


var TA = Uint16Array;
  var buffer = new ArrayBuffer(4);
  assert.throws(TypeError, function() {
    TA(buffer);
  });
