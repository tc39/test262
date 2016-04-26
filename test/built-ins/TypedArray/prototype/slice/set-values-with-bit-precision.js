// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: >
  Preserves the bit-level encoding of the source data if srcType == targetType
info: >
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  14. If SameValue(srcType, targetType) is false, then
    ...
  15. Else if count > 0, then
    ...
    h. Let srcByteIndex be (k × elementSize) + srcByteOffet.
    i. Let limit be targetByteIndex + count × elementSize.
    j. Repeat, while targetByteIndex < limit
      i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, "Uint8").
      ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, "Uint8", value).
      ...
  16. Return A
includes: [testTypedArray.js, compareArray.js]
features: [Symbol.species]
---*/

var buffer = new ArrayBuffer(32);

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(buffer);
  sample[0] = 0.6;
  sample[1] = 0.6;
  sample[2] = 0.6;
  sample[3] = 0.6;

  var result = sample.slice(2);
  var expected = new TA(buffer, 2 * TA.BYTES_PER_ELEMENT);

  assert(compareArray(result, expected), "preserves the bit-level encoding");
  assert.notSameValue(result.buffer, sample.buffer, "creates a new buffer");
});
