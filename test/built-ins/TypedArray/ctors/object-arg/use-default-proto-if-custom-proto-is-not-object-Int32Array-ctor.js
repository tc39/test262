// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-use-default-proto-if-custom-proto-is-not-object.template
/*---
description: Int32Array Constructor (Use prototype from %TypedArray% if newTarget's prototype is not an Object)
esid: sec-typedarray-object
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

    ...
    3. Let O be ? AllocateTypedArray(TypedArray.[[TypedArrayConstructorName]],
    NewTarget, "%TypedArrayPrototype%").
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
var o = [];

var TA = Int32Array;
var ta = Reflect.construct(TA, [o], newTarget);

assert.sameValue(ta.constructor, TA);
assert.sameValue(Object.getPrototypeOf(ta), TA.prototype);
