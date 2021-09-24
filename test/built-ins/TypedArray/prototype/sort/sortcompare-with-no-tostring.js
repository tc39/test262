// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.sort
description: TypedArrays sort does not cast values to String
info: |
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  When the TypedArray SortCompare abstract operation is called with two
  arguments x and y, the following steps are taken:

  ...
  2. If the argument comparefn is not undefined, then
    a. Let v be ? Call(comparefn, undefined, « x, y »).
    ...
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

var toStringCalled = false;
Number.prototype.toString = function() {
  toStringCalled = true;
}

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([20, 100, 3]);
  var result = sample.sort();
  assert.sameValue(toStringCalled, false, 'The value of toStringCalled is expected to be false');
  assert.compareArray(result, [3, 20, 100], 'The value of result is expected to be [3, 20, 100]');
});
