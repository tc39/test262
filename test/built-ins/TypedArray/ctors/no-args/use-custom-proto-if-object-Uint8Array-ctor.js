// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8Array-ctor.case
// - src/TypedArrays/ctors/no-args-use-custom-proto-if-object.template
/*---
description: Uint8Array Constructor (Use prototype from new target if it's an Object)
esid: sec-typedarray
features: [Reflect, TypedArray]
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

    1. Let proto be ? GetPrototypeFromConstructor(newTarget, defaultProto).
    2. Let obj be IntegerIndexedObjectCreate (proto, «[[ViewedArrayBuffer]],
    [[TypedArrayName]], [[ByteLength]], [[ByteOffset]], [[ArrayLength]]» ).
    ...

    9.4.5.7 IntegerIndexedObjectCreate (prototype, internalSlotsList)

    ...
    10. Set the [[Prototype]] internal slot of A to prototype.
    ...
    12. Return A.

---*/


function newTarget() {}
var proto = {};
newTarget.prototype = proto;

var TA = Uint8Array;
  var ta = Reflect.construct(TA, [], newTarget);

  assert.sameValue(ta.constructor, Object);
  assert.sameValue(Object.getPrototypeOf(ta), proto);
