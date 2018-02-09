// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-as-generator-iterable-returns.template
/*---
description: Uint32Array Constructor (Return typedArray from iterable argument)
esid: sec-typedarray-object
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

---*/


var TA = Uint32Array;
  var obj = (function *() {
    yield 7; yield 42;
  })();

  var typedArray = new TA(obj);
  assert.sameValue(typedArray.length, 2);
  assert.sameValue(typedArray[0], 7);
  assert.sameValue(typedArray[1], 42);
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
