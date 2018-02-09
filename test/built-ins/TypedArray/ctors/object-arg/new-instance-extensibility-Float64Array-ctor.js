// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/object-arg-new-instance-extensibility.template
/*---
description: Float64Array Constructor (The new typedArray instance from an object argument is extensible)
esid: sec-typedarray-object
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

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


var TA = Float64Array;
  var obj = {
    "0": 0,
    "1": 1,
    "2": 2,
    length: 3
  };

  var sample = new TA(obj);

  assert(Object.isExtensible(sample));
