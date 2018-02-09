// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-returns-new-instance.template
/*---
description: Int32Array Constructor (Return a TypedArray object)
esid: sec-typedarray-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    20. Return O.

---*/


var len = 10;
var typedArraySample = new Int8Array(len);

var TA = Int32Array;
var typedArray = new TA(typedArraySample);

assert.notSameValue(typedArray, typedArraySample);
assert.sameValue(typedArray.length, len);
assert.sameValue(typedArray.constructor, TA);
assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
