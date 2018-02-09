// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/object-arg-throws-from-property.template
/*---
description: Uint16Array Constructor (Return abrupt from getting object property)
esid: sec-typedarray-object
features: [TypedArray]
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
    ...

---*/


var obj = {
  length: 4
};

Object.defineProperty(obj, "2", {
  get() {
    throw new Test262Error();
  }
});

var TA = Uint16Array;
  obj[0] = 0;
  obj[1] = 0;
  assert.throws(Test262Error, function() {
    new TA(obj);
  });
