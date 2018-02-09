// This file was procedurally generated from the following sources:
// - src/TypedArrays/Uint32Array-ctor.case
// - src/TypedArrays/ctors/typedarray-arg-other-ctor-buffer-ctor-not-object-throws.template
/*---
description: Uint32Array Constructor (Return abrupt completion from typedArray argument's buffer.constructor's value)
esid: sec-typedarray-typedarray
features: [Symbol, TypedArray]
flags: [generated]
info: |
    22.2.4.3 TypedArray ( typedArray )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has a [[TypedArrayName]] internal slot.

    ...
    18. Else,
      a. Let bufferConstructor be ? SpeciesConstructor(srcData, %ArrayBuffer%).
    ...

    7.3.20 SpeciesConstructor ( O, defaultConstructor )

    ...
    2. Let C be ? Get(O, "constructor").
    ...
    4. If Type(C) is not Object, throw a TypeError exception.
    ...

---*/


var sample1 = new Int8Array();
var sample2 = new Int16Array();

var TA = Uint32Array;
var sample = TA === Int8Array ? sample2 : sample1;

sample.buffer.constructor = 1;
assert.throws(TypeError, function() {
  new TA(sample);
});

sample.buffer.constructor = true;
assert.throws(TypeError, function() {
  new TA(sample);
});

sample.buffer.constructor = "";
assert.throws(TypeError, function() {
  new TA(sample);
});

sample.buffer.constructor = null;
assert.throws(TypeError, function() {
  new TA(sample);
});

var s = Symbol("1");
sample.buffer.constructor = s;
assert.throws(TypeError, function() {
  new TA(sample);
});
