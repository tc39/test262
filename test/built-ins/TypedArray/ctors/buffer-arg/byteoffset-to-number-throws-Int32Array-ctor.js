// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-byteoffset-to-number-throws.template
/*---
description: Int32Array Constructor (Return abrupt from parsing integer value from byteOffset)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
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


var buffer = new ArrayBuffer(8);
var byteOffset = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var TA = Int32Array;
assert.throws(Test262Error, function() {
  new TA(buffer, byteOffset);
});
