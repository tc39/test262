// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-typedarray-offset
description: >
  Set values from different instances using the same buffer and same
  constructor. srcBuffer values are cached.
info: |
  22.2.3.23.2 %TypedArray%.prototype.set(typedArray [ , offset ] )

  1. Assert: typedArray has a [[TypedArrayName]] internal slot. If it does not,
  the definition in 22.2.3.23.1 applies.
  ...
  23. If SameValue(srcBuffer, targetBuffer) is true, then
    a. Let srcBuffer be ? CloneArrayBuffer(srcBuffer, srcByteOffset, srcLength,
    %ArrayBuffer%).
    b. NOTE: %ArrayBuffer% is used to clone srcBuffer because is it known to not
    have any observable side-effects.
    ...
  ...
  27. If SameValue(srcType, targetType) is true, then,
    a. NOTE: If srcType and targetType are the same, the transfer must be
    performed in a manner that preserves the bit-level encoding of the source
    data.
    b. Repeat, while targetByteIndex < limit
      i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, "Uint8").
      ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, "Uint8",
      value).
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample, src, result;

  sample = new TA([1, 2, 3, 4]);
  src = new TA(sample.buffer, 0, 2);
  result = sample.set(src, 0);
  assert.compareArray(sample, [1, 2, 3, 4], 'The value of sample is expected to be [1, 2, 3, 4]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');

  sample = new TA([1, 2, 3, 4]);
  src = new TA(sample.buffer, 0, 2);
  result = sample.set(src, 1);
  assert.compareArray(sample, [1, 1, 2, 4], 'The value of sample is expected to be [1, 1, 2, 4]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');

  sample = new TA([1, 2, 3, 4]);
  src = new TA(sample.buffer, 0, 2);
  result = sample.set(src, 2);
  assert.compareArray(sample, [1, 2, 1, 2], 'The value of sample is expected to be [1, 2, 1, 2]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
});
