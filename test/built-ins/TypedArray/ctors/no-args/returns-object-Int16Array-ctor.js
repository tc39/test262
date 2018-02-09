// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/no-args-returns-object.template
/*---
description: Int16Array Constructor (Return a TypedArray object)
esid: sec-typedarray
features: [TypedArray]
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

    ...
    7. Return obj

---*/


var TA = Int16Array;
  var typedArray = new TA();

  assert.sameValue(typedArray.length, 0);
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
