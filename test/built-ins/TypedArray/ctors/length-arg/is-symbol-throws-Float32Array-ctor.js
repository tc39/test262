// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float32Array-ctor.case
// - src/TypedArrays/ctors/length-arg-is-symbol-throws.template
/*---
description: Float32Array Constructor (If length is a Symbol, throw a TypeError exception.)
esid: sec-typedarray-length
features: [Symbol, TypedArray]
flags: [generated]
info: |
    22.2.4.2 TypedArray ( length )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is not Object.

    ...
    4. Let numberLength be ? ToNumber(length).
    ...

---*/


var s = Symbol('1');

var TA = Float32Array;
  assert.throws(TypeError, function() {
    new TA(s);
  });
