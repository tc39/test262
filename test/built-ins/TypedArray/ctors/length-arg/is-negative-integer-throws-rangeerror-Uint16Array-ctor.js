// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint16Array-ctor.case
// - src/TypedArrays/ctors/length-arg-is-negative-integer-throws-rangeerror.template
/*---
description: Uint16Array Constructor (Throws a RangeError if ToInteger(length) is a negative value)
esid: sec-typedarray-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.2 TypedArray ( length )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is not Object.

    ...
    3. Let elementLength be ? ToIndex(length).
    ...

    7.1.17 ToIndex ( value )

    1. If value is undefined, then
      ...
    2. Else,
      a. Let integerIndex be ? ToInteger(value).
      b. If integerIndex < 0, throw a RangeError exception.
      ...

---*/


var TA = Uint16Array;
  assert.throws(RangeError, function() {
    new TA(-1);
  });

  assert.throws(RangeError, function() {
    new TA(-Infinity);
  });
