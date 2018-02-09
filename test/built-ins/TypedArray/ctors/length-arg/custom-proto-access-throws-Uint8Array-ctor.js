// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8Array-ctor.case
// - src/TypedArrays/ctors/length-arg-custom-proto-access-throws.template
/*---
description: Uint8Array Constructor (Return abrupt completion getting newTarget's prototype)
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

var TA = Uint8Array;
  assert.throws(Test262Error, function() {
    Reflect.construct(TA, [1], newTarget);
  });
