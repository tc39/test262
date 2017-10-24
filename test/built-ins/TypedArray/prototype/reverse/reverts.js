// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.reverse
description: Reverts values
info: |
  22.2.3.22 %TypedArray%.prototype.reverse ( )

  %TypedArray%.prototype.reverse is a distinct function that implements the same
  algorithm as Array.prototype.reverse as defined in 22.1.3.21 except that the
  this object's [[ArrayLength]] internal slot is accessed in place of performing
  a [[Get]] of "length".

  22.1.3.21 Array.prototype.reverse ( )

  ...
  6. Return O.
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

var buffer = new ArrayBuffer(64);

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(buffer, 0, 4);
  var other = new TA(buffer, 0, 5);

  sample[0] = N(42);
  sample[1] = N(43);
  sample[2] = N(2);
  sample[3] = N(1);
  other[4] = N(7);

  sample.reverse();
  assert(
    compareArray(sample, N([1, 2, 43, 42]))
  );

  assert(
    compareArray(other, N([1, 2, 43, 42, 7]))
  );

  sample[0] = N(7);
  sample[1] = N(17);
  sample[2] = N(1);
  sample[3] = N(0);
  other[4] = N(42);

  other.reverse();
  assert(
    compareArray(other, N([42, 0, 1, 17, 7]))
  );

  assert(
    compareArray(sample, N([42, 0, 1, 17]))
  );
});
