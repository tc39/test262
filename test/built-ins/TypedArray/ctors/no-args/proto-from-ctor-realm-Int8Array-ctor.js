// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/no-args-proto-from-ctor-realm.template
/*---
description: Int8Array Constructor (Default [[Prototype]] value derived from realm of the newTarget)
esid: sec-typedarray
features: [cross-realm, Reflect, TypedArray]
flags: [generated]
info: |
    [...]
    3. Return ? AllocateTypedArray(constructorName, NewTarget,
       "%TypedArrayPrototype%", 0).

    22.2.4.2.1 Runtime Semantics: AllocateTypedArray

    1. Let proto be ? GetPrototypeFromConstructor(newTarget, defaultProto).
    [...]

    9.1.14 GetPrototypeFromConstructor

    [...]
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    5. Return proto.

---*/


var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;

var TA = Int8Array;
  var ta = Reflect.construct(TA, [], C);

  assert.sameValue(Object.getPrototypeOf(ta), other[TA.name].prototype);
