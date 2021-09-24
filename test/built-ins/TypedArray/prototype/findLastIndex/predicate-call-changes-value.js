// Copyright (C) 2021 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlastindex
description: >
  Change values during predicate call
info: |
  %TypedArray%.prototype.findLastIndex ( predicate [ , thisArg ] )

  ...
  6. Repeat, while k ≥ 0
    ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...
includes: [compareArray.js, testTypedArray.js]
features: [TypedArray, array-find-from-last]
---*/

assert.sameValue(
  typeof BigInt64Array.prototype.findLastIndex,
  'function',
  'The value of `typeof BigInt64Array.prototype.findLastIndex` is expected to be "function"'
);

assert.sameValue(
  typeof BigUint64Array.prototype.findLastIndex,
  'function',
  'The value of `typeof BigUint64Array.prototype.findLastIndex` is expected to be "function"'
);

testWithTypedArrayConstructors(function(TA) {
  var arr = [10, 20, 30];
  var sample;
  var result;

  sample = new TA(3);
  sample.findLastIndex(function(val, i) {
    sample[i] = arr[i];

    assert.sameValue(val, 0, 'The value of val is expected to be 0');
  });
  assert.compareArray(sample, arr, 'The value of sample is expected to equal the value of arr');

  sample = new TA(arr);
  result = sample.findLastIndex(function(val, i) {
    if ( i === 2 ) {
      sample[0] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, 0, 'The value of result is expected to be 0');

  sample = new TA(arr);
  result = sample.findLastIndex(function(val, i) {
    if ( i === 2 ) {
      sample[0] = 7;
    }
    return val === 10;
  });
  assert.sameValue(result, -1, 'The value of result is expected to be -1');

  sample = new TA(arr);
  result = sample.findLastIndex(function(val, i) {
    if ( i < 2) {
      sample[2] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, -1, 'The value of result is expected to be -1');
});
