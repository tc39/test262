// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/length-arg-new-instance-extensibility.template
/*---
description: Uint16Array Constructor (The new typedArray instance from a length argument is extensible)
esid: sec-typedarray-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.2 TypedArray ( length )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is not Object.

    ...
    8. Return ? AllocateTypedArray(constructorName, NewTarget,
    %TypedArrayPrototype%, elementLength).

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


var TA = Uint16Array;
  var sample = new TA(4);

  assert(Object.isExtensible(sample));
