// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-use-default-proto-if-custom-proto-is-not-object.template
/*---
description: Uint8Array Constructor (Use prototype from %TypedArray% if newTarget's prototype is not an Object)
esid: sec-typedarray-typedarray
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    4. Let O be ? AllocateTypedArray(constructorName, NewTarget,
    %TypedArrayPrototype%).
    ...

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

var sample = new Int8Array(8);

var TA = Uint8Array;
var ta = Reflect.construct(TA, [sample], newTarget);

assert.sameValue(ta.constructor, TA);
assert.sameValue(Object.getPrototypeOf(ta), TA.prototype);
