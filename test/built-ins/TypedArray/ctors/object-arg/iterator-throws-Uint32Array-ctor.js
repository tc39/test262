// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-iterator-throws.template
/*---
description: Uint32Array Constructor (Return abrupt from getting object @@iterator)
esid: sec-typedarray-object
features: [Symbol.iterator, TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

    ...
    4. Let arrayLike be ? IterableToArrayLike(object).
    ...

---*/


var obj = function () {};

Object.defineProperty(obj, Symbol.iterator, {
  get() {
    throw new Test262Error();
  }
});

var TA = Uint32Array;
  assert.throws(Test262Error, function() {
    new TA(obj);
  });
