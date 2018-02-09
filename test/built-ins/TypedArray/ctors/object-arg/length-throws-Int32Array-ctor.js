// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-length-throws.template
/*---
description: Int32Array Constructor (Return abrupt from getting length property on the object argument)
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
    5. Let len be ? ToLength(? Get(arrayLike, "length")).
    ...

---*/


var obj = {};

Object.defineProperty(obj, "length", {
  get() {
    throw new Test262Error();
  }
});

var TA = Int32Array;
  assert.throws(Test262Error, function() {
    new TA(obj);
  });
