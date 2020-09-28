// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-set-p-v-receiver
description: >
  Returns false if key has a numeric index and object has a detached buffer
info: |
  9.4.5.5 [[Set]] ( P, V, Receiver)

  ...
  2. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      i. Return ? IntegerIndexedElementSet(O, numericIndex, V).
  ...

  9.4.5.9 IntegerIndexedElementSet ( O, index, value )

  Assert: O is an Integer-Indexed exotic object.
  Assert: Type(index) is Number.
  If O.[[ContentType]] is BigInt, let numValue be ? ToBigInt(value).
  Otherwise, let numValue be ? ToNumber(value).
  Let buffer be O.[[ViewedArrayBuffer]].
  If IsDetachedBuffer(buffer) is true, return false.
  If ! IsValidIntegerIndex(O, index) is false, return false.

includes: [testBigIntTypedArray.js, detachArrayBuffer.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([42n]);
  $DETACHBUFFER(sample.buffer);
  assert.sameValue(sample[0] = 1n, false, '`sample[0] = 1n` is false');
  assert.sameValue(sample['1.1'] = 1n, false, '`sample["1.1"] = 1n` is false');
  assert.sameValue(sample['-0'] = 1n, false, '`sample["-0"] = 1n` is false');
  assert.sameValue(sample['-1'] = 1n, false, '`sample["-1"] = 1n` is false');
  assert.sameValue(sample['1'] = 1n, false, '`sample["1"] = 1n` is false');
  assert.sameValue(sample['2'] = 1n, false, '`sample["2"] = 1n` is false');

  var obj = {
    valueOf: function() {
      throw new Test262Error();
    }
  };

  assert.throws(Test262Error, function() {
    sample['0'] = obj;
  }, '`sample["0"] = obj` throws Test262Error');
});
