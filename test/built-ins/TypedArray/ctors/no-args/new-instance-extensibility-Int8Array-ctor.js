// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/no-args-new-instance-extensibility.template
/*---
description: Int8Array Constructor (The new typedArray instance is extensible)
esid: sec-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.1 TypedArray( )

    This description applies only if the TypedArray function is called with no
    arguments.

    ...
    3. Return ? AllocateTypedArray(constructorName, NewTarget,
    %TypedArrayPrototype%, 0).

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


var TA = Int8Array;
  var sample = new TA();

  assert(Object.isExtensible(sample));
