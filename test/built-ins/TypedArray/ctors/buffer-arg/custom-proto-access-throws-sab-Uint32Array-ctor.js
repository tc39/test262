// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-custom-proto-access-throws-sab.template
/*---
description: Uint32Array Constructor (Return abrupt completion getting newTarget's prototype)
esid: sec-typedarray-buffer-byteoffset-length
features: [Reflect, SharedArrayBuffer, TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

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


var buffer = new SharedArrayBuffer(8);

var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {
    throw new Test262Error();
  }
});

var TA = Uint32Array;
assert.throws(Test262Error, function() {
  Reflect.construct(TA, [buffer], newTarget);
});
