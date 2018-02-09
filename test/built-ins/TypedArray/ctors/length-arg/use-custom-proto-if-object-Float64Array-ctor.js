// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/length-arg-use-custom-proto-if-object.template
/*---
description: Float64Array Constructor (Use prototype from new target if it's an Object)
esid: sec-typedarray-length
features: [Reflect, TypedArray]
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

var TA = Float64Array;
  var ta = Reflect.construct(TA, [1], newTarget);

  assert.sameValue(ta.constructor, Object);
  assert.sameValue(Object.getPrototypeOf(ta), proto);
