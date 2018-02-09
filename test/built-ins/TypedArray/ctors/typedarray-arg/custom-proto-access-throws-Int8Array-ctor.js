// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-custom-proto-access-throws.template
/*---
description: Int8Array Constructor (Return abrupt completion getting newTarget's prototype)
esid: sec-typedarray-typedarray
features: [Reflect, TypedArray]
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

var sample = new Int8Array();

var TA = Int8Array;
assert.throws(Test262Error, function() {
  Reflect.construct(TA, [sample], newTarget);
});
