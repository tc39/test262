// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.sort
description: TypedArrays sort does not cast values to String
info: >
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  When the TypedArray SortCompare abstract operation is called with two
  arguments x and y, the following steps are taken:

  ...
  2. If the argument comparefn is not undefined, then
    a. Let v be ? Call(comparefn, undefined, « x, y »).
    ...
  ...
includes: [testTypedArray.js, compareArray.js]
---*/

var origToString = Number.prototype.toString;

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([4, 3, 2, 1]);

  Number.prototype.toString = function() {
    throw new Test262Error();
  };
  var result = sample.sort();
  Number.prototype.toString = origToString;

  assert(compareArray(result, [1, 2, 3, 4]));
});
