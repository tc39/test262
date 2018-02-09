// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-returns-new-bigint-typedarray.template
/*---
description: Int8Array Constructor (Return abrupt from getting typedArray argument's buffer.constructor.@@species)
esid: sec-typedarray-typedarray
features: [TypedArray, BigInt]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

---*/


var TA = Int8Array;
var sample = new BigInt64Array(7);
var typedArray = new TA(sample);

assert.sameValue(typedArray.length, 7);
assert.notSameValue(typedArray, sample);
assert.sameValue(typedArray.constructor, TA);
assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
