// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/no-args-custom-proto-access-throws.template
/*---
description: Float64Array Constructor (Return abrupt completion getting newTarget's prototype)
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

var TA = Float64Array;
  assert.throws(Test262Error, function() {
    Reflect.construct(TA, [], newTarget);
  });
