// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/length-arg-undefined-newtarget-throws.template
/*---
description: Uint16Array Constructor (Throws a TypeError if NewTarget is undefined.)
esid: sec-typedarray-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.2 TypedArray ( length )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is not Object.

    ...
    2. If NewTarget is undefined, throw a TypeError exception.
    ...

---*/


var TA = Uint16Array;
  assert.throws(TypeError, function() {
    TA(0);
  });

  assert.throws(TypeError, function() {
    TA(Infinity);
  });
