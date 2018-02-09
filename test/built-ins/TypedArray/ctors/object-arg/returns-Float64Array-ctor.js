// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/object-arg-returns.template
/*---
description: Float64Array Constructor (Return typedArray from object argument)
esid: sec-typedarray-object
features: [Symbol, TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

---*/


var obj = {
  "0": null,
  "2": 42,
  "3": "7",
  "4": NaN,
  "5": Symbol("1"),
  length: 5
};

var TA = Float64Array;
  var typedArray = new TA(obj);
  assert.sameValue(typedArray.length, 5);
  assert.sameValue(typedArray[0], 0);
  assert.sameValue(typedArray[2], 42);
  assert.sameValue(typedArray[3], 7);
  assert.sameValue(typedArray[5], undefined);
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);

  if (TA === Float32Array || TA === Float64Array) {
    assert.sameValue(typedArray[1], NaN);
    assert.sameValue(typedArray[4], NaN);
  } else {
    assert.sameValue(typedArray[1], 0);
    assert.sameValue(typedArray[4], 0);
  }
