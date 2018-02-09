// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int8Array-ctor.case
// - src/TypedArrays/ctors/object-arg-throws-setting-property.template
/*---
description: Int8Array Constructor (Return abrupt from setting property)
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
      c. Perform ? Set(O, Pk, kValue, true).
    ...

---*/


var obj = {
  "2": {
    valueOf() {
      throw new Test262Error();
    }
  },
  length: 4
};

var TA = Int8Array;
obj[0] = 0;
obj[1] = 0;
assert.throws(Test262Error, function() {
  new TA(obj);
});
