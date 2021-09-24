// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.fill
description: >
  Fills elements from coerced to Integer `start` and `end` values
info: |
  22.2.3.8 %TypedArray%.prototype.fill (value [ , start [ , end ] ] )

  %TypedArray%.prototype.fill is a distinct function that implements the same
  algorithm as Array.prototype.fill as defined in 22.1.3.6 except that the this
  object's [[ArrayLength]] internal slot is accessed in place of performing a
  [[Get]] of "length". The implementation of the algorithm may be optimized with
  the knowledge that the this value is an object that has a fixed length and
  whose integer indexed properties are not sparse. However, such optimization
  must not introduce any observable changes in the specified behaviour of the
  algorithm.

  ...

  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  ...
  3. Let relativeStart be ? ToInteger(start).
  4. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be
  min(relativeStart, len).
  5. If end is undefined, let relativeEnd be len; else let relativeEnd be ?
  ToInteger(end).
  ...
includes: [compareArray.js, testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.compareArray(
    new TA([0, 0]).fill(1, undefined), [1, 1],
    'new TA([0, 0]).fill(1, undefined) must return [1, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, undefined), [1, 1],
    'new TA([0, 0]).fill(1, 0, undefined) must return [1, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, null), [1, 1],
    'new TA([0, 0]).fill(1, null) must return [1, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, null), [0, 0],
    'new TA([0, 0]).fill(1, 0, null) must return [0, 0]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, true), [0, 1],
    'new TA([0, 0]).fill(1, true) must return [0, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, true), [1, 0],
    'new TA([0, 0]).fill(1, 0, true) must return [1, 0]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, false), [1, 1],
    'new TA([0, 0]).fill(1, false) must return [1, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, false), [0, 0],
    'new TA([0, 0]).fill(1, 0, false) must return [0, 0]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, NaN), [1, 1],
    'new TA([0, 0]).fill(1, NaN) must return [1, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, NaN), [0, 0],
    'new TA([0, 0]).fill(1, 0, NaN) must return [0, 0]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, '1'), [0, 1],
    'new TA([0, 0]).fill(1, "1") must return [0, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, '1'), [1, 0],
    'new TA([0, 0]).fill(1, 0, "1") must return [1, 0]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 1.5), [0, 1],
    'new TA([0, 0]).fill(1, 1.5) must return [0, 1]'
  );

  assert.compareArray(
    new TA([0, 0]).fill(1, 0, 1.5), [1, 0],
    'new TA([0, 0]).fill(1, 0, 1.5) must return [1, 0]'
  );
});
