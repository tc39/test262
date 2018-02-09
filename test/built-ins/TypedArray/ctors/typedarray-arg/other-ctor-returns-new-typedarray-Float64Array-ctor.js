// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-returns-new-typedarray.template
/*---
description: Float64Array Constructor (Return abrupt from getting typedArray argument's buffer.constructor.@@species)
esid: sec-typedarray-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

---*/


var sample1 = new Int8Array(7);
var sample2 = new Int16Array(7);

var TA = Float64Array;
var sample = TA === Int8Array ? sample2 : sample1;
var typedArray = new TA(sample);

assert.sameValue(typedArray.length, 7);
assert.notSameValue(typedArray, sample);
assert.sameValue(typedArray.constructor, TA);
assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
