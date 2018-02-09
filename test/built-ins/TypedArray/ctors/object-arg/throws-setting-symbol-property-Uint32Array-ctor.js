// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/object-arg-throws-setting-symbol-property.template
/*---
description: Uint32Array Constructor (Return abrupt from setting property)
esid: sec-typedarray-object
features: [Symbol, TypedArray]
flags: [generated]
info: |
    22.2.4.4 TypedArray ( object )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
    internal slot.

    ...
    8. Repeat, while k < len
      ...
      b. Let kValue be ? Get(arrayLike, Pk).
      c. Perform ? Set(O, Pk, kValue, true).
    ...

---*/


var obj = {
  "2": Symbol("1"),
  length: 4
};

var TA = Uint32Array;
assert.throws(TypeError, function() {
  new TA(obj);
});
