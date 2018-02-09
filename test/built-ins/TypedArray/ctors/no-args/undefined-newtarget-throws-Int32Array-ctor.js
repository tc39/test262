// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/no-args-undefined-newtarget-throws.template
/*---
description: Int32Array Constructor (Throws a TypeError if NewTarget is undefined.)
esid: sec-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.1 TypedArray( )

    This description applies only if the TypedArray function is called with no
    arguments.

    1. If NewTarget is undefined, throw a TypeError exception.
    ...

---*/


var TA = Int32Array;
  assert.throws(TypeError, function() {
    TA();
  });
