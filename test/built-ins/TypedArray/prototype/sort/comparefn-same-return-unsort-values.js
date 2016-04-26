// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.sort
description: Order is the same if comparefn always returns the same value
info: >
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  When the TypedArray SortCompare abstract operation is called with two
  arguments x and y, the following steps are taken:

  ...
includes: [testTypedArray.js, compareArray.js]
---*/

var comparefn = function() {
  return 0;
};

testWithTypedArrayConstructors(function(TA) {
  var arr, sample;

  arr = [4, 3, 2, 1];
  sample = new TA(arr).sort(comparefn);
  assert(compareArray(sample, arr), "[4, 3, 2, 1]");

  arr = [1, 2, 3, 4];
  sample = new TA(arr).sort(comparefn);
  assert(compareArray(sample, arr), "[1, 2, 3, 4]");

  arr = [0, 1, 0, 3, 2, 1];
  sample = new TA(arr).sort(comparefn);
  assert(compareArray(sample, arr), "[0, 1, 0, 3, 2, 1]");
});
