// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-typedarray-offset
description: >
  Set values from different instances using the same buffer and same
  constructor when underlying ArrayBuffer has been resized
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray, resizable-arraybuffer]
---*/

assert.sameValue(
  typeof ArrayBuffer.prototype.resize,
  'function',
  'The value of `typeof ArrayBuffer.prototype.resize` is expected to be "function"'
);

testWithBigIntTypedArrayConstructors(function(TA) {
  var BPE = TA.BYTES_PER_ELEMENT;

  var ab = new ArrayBuffer(BPE * 4, {
    maxByteLength: BPE * 5
  });

  var source = new TA(ab);
  var target = new TA(ab);
  source[0] = 10n;
  source[1] = 20n;
  source[2] = 30n;
  source[3] = 40n;

  try {
    ab.resize(BPE * 5);
  } catch (_) {}

  target.set(source);
  assert.compareArray(target, [10n, 20n, 30n, 40n, 0n], 'The value of target is expected to be [10n, 20n, 30n, 40n, 0n]');

  try {
    ab.resize(BPE * 3);
  } catch (_) {}

  target.set(source);
  assert.compareArray(target, [10n, 20n, 30n], 'The value of target is expected to be [10n, 20n, 30n]');
});
