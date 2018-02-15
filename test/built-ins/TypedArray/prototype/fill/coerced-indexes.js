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
---*/

testWithTypedArrayConstructors(function(TA, N) {
  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), undefined), N([1, 1])),
    '`undefined` start coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, undefined), N([1, 1])),
    'If end is undefined, let relativeEnd be len'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), null), N([1, 1])),
    '`null` start coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, null), N([0, 0])),
    '`null` end coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), true), N([0, 1])),
    '`true` start coerced to 1'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, true), N([1, 0])),
    '`true` end coerced to 1'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), false), N([1, 1])),
    '`false` start coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, false), N([0, 0])),
    '`false` end coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), NaN), N([1, 1])),
    '`NaN` start coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, NaN), N([0, 0])),
    '`NaN` end coerced to 0'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), '1'), N([0, 1])),
    'string start coerced'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, '1'), N([1, 0])),
    'string end coerced'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 1.5), N([0, 1])),
    'start as a float number coerced'
  );

  assert(
    compareArray(new TA(N([0, 0])).fill(N(1), 0, 1.5), N([1, 0])),
    'end as a float number coerced'
  );
});
