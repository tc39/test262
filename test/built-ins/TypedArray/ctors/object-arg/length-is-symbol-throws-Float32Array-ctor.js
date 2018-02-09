// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-length-is-symbol-throws.template
/*---
description: Float32Array Constructor (Return abrupt from length property as a Symbol on the object argument)
esid: sec-typedarray-object
features: [Symbol, TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

    ...
    5. Let len be ? ToLength(? Get(arrayLike, "length")).
    ...

---*/


var obj = {
  length: Symbol("1")
};

var TA = Float32Array;
  assert.throws(TypeError, function() {
    new TA(obj);
  });
