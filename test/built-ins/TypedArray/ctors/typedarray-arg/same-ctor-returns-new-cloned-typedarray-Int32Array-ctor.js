// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-same-ctor-returns-new-cloned-typedarray.template
/*---
description: Int32Array Constructor (Same typedArray ctor argument returns a new cloned typedArray)
esid: sec-typedarray-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    17. If SameValue(elementType, srcType) is true, then
      a. Let data be ? CloneArrayBuffer(srcData, srcByteOffset).
    ...
    23. Return O.

---*/


var TA = Int32Array;
var sample = new TA(7);
var typedArray = new TA(sample);

assert.sameValue(typedArray.length, 7);
assert.notSameValue(typedArray, sample);
assert.notSameValue(typedArray.buffer, sample.buffer);
assert.sameValue(typedArray.constructor, TA);
assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
