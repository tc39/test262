// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findindex
description: >
  Change values during predicate call
info: |
  22.2.3.11 %TypedArray%.prototype.findIndex ( predicate [ , thisArg ] )

  %TypedArray%.prototype.findIndex is a distinct function that implements the
  same algorithm as Array.prototype.findIndex as defined in 22.1.3.9 except that
  the this object's [[ArrayLength]] internal slot is accessed in place of
  performing a [[Get]] of "length".

  ...

  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  6. Repeat, while k < len
    ...
    c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  ...
includes: [compareArray.js, testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var arr = [10, 20, 30];
  var sample;
  var result;

  sample = new TA(3);
  sample.findIndex(function(val, i) {
    sample[i] = arr[i];

    assert.sameValue(val, 0, 'The value of val is expected to be 0');
  });
  assert.compareArray(sample, arr, 'The value of sample is expected to equal the value of arr');

  sample = new TA(arr);
  result = sample.findIndex(function(val, i) {
    if ( i === 0 ) {
      sample[2] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, 2, 'The value of result is expected to be 2');

  sample = new TA(arr);
  result = sample.findIndex(function(val, i) {
    if ( i === 0 ) {
      sample[2] = 7;
    }
    return val === 30;
  });
  assert.sameValue(result, -1, 'The value of result is expected to be -1');

  sample = new TA(arr);
  result = sample.findIndex(function(val, i) {
    if ( i > 0 ) {
      sample[0] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, -1, 'The value of result is expected to be -1');
});
