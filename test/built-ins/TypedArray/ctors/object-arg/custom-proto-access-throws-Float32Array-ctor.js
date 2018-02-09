// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-custom-proto-access-throws.template
/*---
description: Float32Array Constructor (Return abrupt completion getting newTarget's prototype)
esid: sec-typedarray-object
features: [Reflect, TypedArray]
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
    ...

    9.1.15 GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

    ...
    3. Let proto be ? Get(constructor, "prototype").
    ...

---*/


var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {
    throw new Test262Error();
  }
});

var o = {};

var TA = Float32Array;
  assert.throws(Test262Error, function() {
    Reflect.construct(TA, [o], newTarget);
  });
