// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-as-array-returns.template
/*---
description: Float32Array Constructor (Return typedArray from array argument)
esid: sec-typedarray-object
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

---*/


var obj = [7, 42];

var TA = Float32Array;
  var typedArray = new TA(obj);
  assert.sameValue(typedArray.length, 2);
  assert.sameValue(typedArray[0], 7);
  assert.sameValue(typedArray[1], 42);
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
