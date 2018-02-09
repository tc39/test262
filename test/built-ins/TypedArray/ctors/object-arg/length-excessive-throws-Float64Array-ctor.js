// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/object-arg-length-excessive-throws.template
/*---
description: Float64Array Constructor (Return abrupt from allocating array buffer with excessive length)
esid: sec-typedarray-object
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

    ...
    6. Perform ? AllocateTypedArrayBuffer(O, len).
    ...

---*/


var obj = {
  length: Math.pow(2, 53)
};

var TA = Float64Array;
  assert.throws(RangeError, function() {
    new TA(obj);
  });
