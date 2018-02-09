// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-length-access-throws-sab.template
/*---
description: Float64Array Constructor (Returns abrupt from ToLength(length))
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
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


var buffer = new SharedArrayBuffer(8);
var len = {
  valueOf() {
    throw new Test262Error();
  }
};

var TA = Float64Array;
  assert.throws(Test262Error, function() {
    new TA(buffer, 0, len);
  });
