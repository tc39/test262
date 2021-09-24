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
includes: [compareArray.js, testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  assert.compareArray(
    new TA([0n, 0n]).fill(1n, undefined),
    [1n, 1n],
    'new TA([0n, 0n]).fill(1n, undefined) must return [1n, 1n]'
  );

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, undefined),
    [1n, 1n],
    'new TA([0n, 0n]).fill(1n, 0, undefined) must return [1n, 1n]'
  );

  assert.compareArray(new TA([0n, 0n]).fill(1n, null), [1n, 1n], 'new TA([0n, 0n]).fill(1n, null) must return [1n, 1n]');

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, null),
    [0n, 0n],
    'new TA([0n, 0n]).fill(1n, 0, null) must return [0n, 0n]'
  );

  assert.compareArray(new TA([0n, 0n]).fill(1n, true), [0n, 1n], 'new TA([0n, 0n]).fill(1n, true) must return [0n, 1n]');

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, true),
    [1n, 0n],
    'new TA([0n, 0n]).fill(1n, 0, true) must return [1n, 0n]'
  );

  assert.compareArray(new TA([0n, 0n]).fill(1n, false), [1n, 1n], 'new TA([0n, 0n]).fill(1n, false) must return [1n, 1n]');

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, false),
    [0n, 0n],
    'new TA([0n, 0n]).fill(1n, 0, false) must return [0n, 0n]'
  );

  assert.compareArray(new TA([0n, 0n]).fill(1n, NaN), [1n, 1n], 'new TA([0n, 0n]).fill(1n, NaN) must return [1n, 1n]');

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, NaN),
    [0n, 0n],
    'new TA([0n, 0n]).fill(1n, 0, NaN) must return [0n, 0n]'
  );

  assert.compareArray(new TA([0n, 0n]).fill(1n, '1'), [0n, 1n], 'new TA([0n, 0n]).fill(1n, "1") must return [0n, 1n]');

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, '1'),
    [1n, 0n],
    'new TA([0n, 0n]).fill(1n, 0, "1") must return [1n, 0n]'
  );

  assert.compareArray(new TA([0n, 0n]).fill(1n, 1.5), [0n, 1n], 'new TA([0n, 0n]).fill(1n, 1.5) must return [0n, 1n]');

  assert.compareArray(
    new TA([0n, 0n]).fill(1n, 0, 1.5),
    [1n, 0n],
    'new TA([0n, 0n]).fill(1n, 0, 1.5) must return [1n, 0n]'
  );
});
