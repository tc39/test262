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
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample;

  sample = new TA([4, 3, 2, 1]).sort();
  assert(compareArray(sample, [1, 2, 3, 4]), "descending values");

  sample = new TA([3, 4, 1, 2]).sort();
  assert(compareArray(sample, [1, 2, 3, 4]), "mixed numbers");

  sample = new TA([3, 4, 3, 1, 0, 1, 2]).sort();
  assert(compareArray(sample, [0, 1, 1, 2, 3, 3, 4]), "repeating numbers");

  sample = new TA([1, 0, -0, 2]).sort();
  assert(compareArray(sample, [0, 0, 1, 2]), "0s");
});

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([-4, 3, 4, -3, 2, -2, 1, 0]).sort();
  assert(compareArray(sample, [-4, -3, -2, 0, 1, 2, 3, 4]), "negative values");
}, [Float64Array, Float32Array, Int8Array, Int16Array, Int32Array]);

testWithTypedArrayConstructors(function(TA) {
  var sample;

  sample = new TA([0.5, 0, 1.5, 1]).sort();
  assert(compareArray(sample, [0, 0.5, 1, 1.5]), "non integers");

  sample = new TA([0.5, 0, 1.5, -0.5, -1, -1.5, 1]).sort();
  assert(compareArray(sample, [-1.5, -1, -0.5, 0, 0.5, 1, 1.5]), "non integers + negatives");

  sample = new TA([1, 0, -0, 2]).sort();
  assert(compareArray(sample, [0, 0, 1, 2]), "0 and -0");
  assert.sameValue(1 / sample[0], -Infinity, "-0 goes before +0");
  assert.sameValue(1 / sample[1], Infinity, "+0 goes after -0");

  sample = new TA([3, 4, Infinity, -Infinity, 1, 2]).sort();
  assert(compareArray(sample, [-Infinity, 1, 2, 3, 4, Infinity]), "infinities");

  sample = new TA([2, NaN, NaN, 0, 1]).sort();
  assert(compareArray(sample.slice(0, 3), [0, 1, 2]), "NaN compares greater 1");
  assert(Number.isNaN(sample[3]), "NaN compares greater 2");
  assert(Number.isNaN(sample[4]), "NaN compares greater 3");

  sample = new TA([3, NaN, NaN, Infinity, 0, -Infinity, 2]).sort();
  assert(compareArray(sample.slice(0, 5), [-Infinity, 0, 2, 3, Infinity]), "NaN compares greater 4");
  assert(Number.isNaN(sample[5]), "NaN compares greater 5");
  assert(Number.isNaN(sample[6]), "NaN compares greater 6");
}, [Float64Array, Float32Array]);
