// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint8ClampedArray-ctor.case
// - src/TypedArrays/ctors/object-arg-iterator-not-callable-throws.template
/*---
description: Uint8ClampedArray Constructor (Return abrupt when object @@iterator is not callable)
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

var TA = Uint8ClampedArray;
  obj[Symbol.iterator] = {};
  assert.throws(TypeError, function() {
    new TA(obj);
  });

  obj[Symbol.iterator] = true;
  assert.throws(TypeError, function() {
    new TA(obj);
  });

  obj[Symbol.iterator] = 42;
  assert.throws(TypeError, function() {
    new TA(obj);
  });
