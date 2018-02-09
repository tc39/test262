// This file was procedurally generated from the following sources:
// - src/TypedArrays/Int16Array-ctor.case
// - src/TypedArrays/ctors/length-arg-is-infinity-throws-rangeerror.template
/*---
description: Int16Array Constructor (Throws a RangeError if length is a Infinity value)
esid: sec-typedarray-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.2 TypedArray ( length )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is not Object.

    ...
    4. Let numberLength be ? ToNumber(length).
    5. Let elementLength be ToLength(numberLength).
    6. If SameValueZero(numberLength, elementLength) is false, throw a RangeError
    exception.
    ...

---*/


var TA = Int16Array;
  assert.throws(RangeError, function() {
    new TA(Infinity);
  });
