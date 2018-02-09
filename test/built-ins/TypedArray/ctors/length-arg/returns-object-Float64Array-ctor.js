// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/length-arg-returns-object.template
/*---
description: Float64Array Constructor (Return a TypedArray object)
esid: sec-typedarray-length
features: [TypedArray]
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

    ...
    7. Return obj

---*/


var TA = Float64Array;
var typedArray = new TA(4);

assert.sameValue(typedArray.length, 4, "length");
assert.sameValue(typedArray.constructor, TA);
assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
