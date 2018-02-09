// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-new-instance-extensibility.template
/*---
description: Float64Array Constructor (The new typedArray instance from a typedArray argument is extensible)
esid: sec-typedarray-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    ...
    4. Let O be ? AllocateTypedArray(constructorName, NewTarget,
    "%TypedArrayPrototype%").
    ...

    22.2.4.2.1 Runtime Semantics: AllocateTypedArray (constructorName, newTarget,
    defaultProto [ , length ])

    ...
    2. Let obj be IntegerIndexedObjectCreate(proto, « [[ViewedArrayBuffer]],
    [[TypedArrayName]], [[ByteLength]], [[ByteOffset]], [[ArrayLength]] »).
    ...

    9.4.5.7 IntegerIndexedObjectCreate (prototype, internalSlotsList)

    ...
    11. Set the [[Extensible]] internal slot of A to true.
    ...

---*/


var typedArraySample1 = new Int8Array();
var typedArraySample2 = new Int8Array();
Object.preventExtensions(typedArraySample2);

var TA = Float64Array;
var sample1 = new TA(typedArraySample1);

assert(Object.isExtensible(sample1), "new instance is extensible");

var sample2 = new TA(typedArraySample2);
assert(
  Object.isExtensible(sample2),
  "new instance does not inherit extensibility from typedarray argument"
);
