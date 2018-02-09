// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8Array-ctor.case
// - src/TypedArrays/ctors/object-arg-undefined-newtarget-throws.template
/*---
description: Uint8Array Constructor (Throws a TypeError if NewTarget is undefined.)
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
    2. If NewTarget is undefined, throw a TypeError exception.
    ...

---*/


var TA = Uint8Array;
assert.throws(TypeError, function() {
  TA({});
});

assert.throws(TypeError, function() {
  TA([]);
});
