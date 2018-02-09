// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8Array-ctor.case
// - src/TypedArrays/ctors/no-args-use-default-proto-if-custom-proto-is-not-object.template
/*---
description: Uint8Array Constructor (Use prototype from %TypedArray% if newTarget's prototype is not an Object)
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
newTarget.prototype = null;

var TA = Uint8Array;
  var ta = Reflect.construct(TA, [], newTarget);

  assert.sameValue(ta.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(ta), TA.prototype);
