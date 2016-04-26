// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.sort
description: Sort values to numeric ascending order
info: >
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  When the TypedArray SortCompare abstract operation is called with two
  arguments x and y, the following steps are taken:

  ...

  NOTE: Because NaN always compares greater than any other value, NaN property
  values always sort to the end of the result when comparefn is not provided.
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample;

  sample = new TA([2, NaN, NaN, 0, 1]).sort();
  assert(compareArray(sample.slice(0, 3), [0, 1, 2]), "case #1");
  assert(Number.isNaN(sample[3]), "case #2");
  assert(Number.isNaN(sample[4]), "case #3");

  sample = new TA([3, NaN, NaN, Infinity, 0, -Infinity, 2]).sort();
  assert(compareArray(sample.slice(0, 5), [-Infinity, 0, 2, 3, Infinity]), "case #4");
  assert(Number.isNaN(sample[5]), "case #5");
  assert(Number.isNaN(sample[6]), "case #6");
}, [Float64Array, Float32Array]);
