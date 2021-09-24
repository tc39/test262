// Copyright (C) 2021 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlast
description: >
  Change values during predicate call
info: |
  %TypedArray%.prototype.findLast (predicate [ , thisArg ] )

  5. Let k be len - 1.
  6. Repeat, while k ≥ 0,
  ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...

includes: [compareArray.js, testTypedArray.js]
features: [TypedArray, array-find-from-last]
---*/

assert.sameValue(
  typeof BigInt64Array.prototype.findLast,
  'function',
  'The value of `typeof BigInt64Array.prototype.findLast` is expected to be "function"'
);

assert.sameValue(
  typeof BigUint64Array.prototype.findLast,
  'function',
  'The value of `typeof BigUint64Array.prototype.findLast` is expected to be "function"'
);

testWithTypedArrayConstructors(function(TA) {
  var arr = [1, 2, 3];
  var sample;
  var result;

  sample = new TA(3);
  sample.findLast(function(val, i) {
    sample[i] = arr[i];

    assert.sameValue(val, 0, 'The value of val is expected to be 0');
  });
  assert.compareArray(sample, arr, 'The value of sample is expected to equal the value of arr');

  sample = new TA(arr);
  result = sample.findLast(function(val, i) {
    if ( i === 2 ) {
      sample[0] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, 7, 'The value of result is expected to be 7');

  sample = new TA(arr);
  result = sample.findLast(function(val, i) {
    if ( i === 2 ) {
      sample[0] = 7;
    }
    return val === 1;
  });
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');

  sample = new TA(arr);
  result = sample.findLast(function(val, i) {
    if ( i < 2 ) {
      sample[2] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');

  sample = new TA(arr);
  result = sample.findLast(function() {
    sample[2] = 7;
    return true;
  });
  assert.sameValue(result, 3, 'The value of result is expected to be 3');
});
