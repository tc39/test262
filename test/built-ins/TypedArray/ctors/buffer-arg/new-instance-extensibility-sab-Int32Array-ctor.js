// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-new-instance-extensibility-sab.template
/*---
description: Int32Array Constructor (The new typedArray instance from a buffer argument is extensible)
esid: sec-typedarray-buffer-byteoffset-length
features: [SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

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


var TA = Int32Array;
  var buffer = new SharedArrayBuffer(8);
  var sample = new TA(buffer);

  assert(Object.isExtensible(sample));
