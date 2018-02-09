// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-undefined-newtarget-throws.template
/*---
description: Uint32Array Constructor (Throws a TypeError if NewTarget is undefined.)
esid: sec-typedarray-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    2. If NewTarget is undefined, throw a TypeError exception.
    ...

---*/


var TA = Uint32Array;
var typedArray = new TA(4);

assert.throws(TypeError, function() {
  TA(typedArray);
});
