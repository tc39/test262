// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.every
description: >
  TypedArray.p.every behaves correctly when receiver is backed by resizable
  buffer that is shrunk mid-iteration
includes: [compareArray.js, resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

const TypedArrayEveryHelper = (ta, values, rab, resizeAfter, resizeTo) => {
  return ta.every(
    (n) => CollectValuesAndResize(n, values, rab, resizeAfter, resizeTo));
};

// Orig. array: [0, 2, 4, 6]
//              [0, 2, 4, 6] << fixedLength
//                    [4, 6] << fixedLengthWithOffset
//              [0, 2, 4, 6, ...] << lengthTracking
//                    [4, 6, ...] << lengthTrackingWithOffset

for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const fixedLength = new ctor(rab, 0, 4);
  const values = [];
  const resizeAfter = 2;
  const resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(TypedArrayEveryHelper(fixedLength, values, rab, resizeAfter, resizeTo));
  assert.compareArray(values, [
    0,
    2,
    undefined,
    undefined
  ]);
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const values = [];
  const resizeAfter = 1;
  const resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(TypedArrayEveryHelper(fixedLengthWithOffset, values, rab, resizeAfter, resizeTo));
  assert.compareArray(values, [
    4,
    undefined
  ]);
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTracking = new ctor(rab, 0);
  const values = [];
  const resizeAfter = 2;
  const resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(TypedArrayEveryHelper(lengthTracking, values, rab, resizeAfter, resizeTo));
  assert.compareArray(values, [
    0,
    2,
    4,
    undefined
  ]);
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const values = [];
  const resizeAfter = 1;
  const resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(TypedArrayEveryHelper(lengthTrackingWithOffset, values, rab, resizeAfter, resizeTo));
  assert.compareArray(values, [
    4,
    undefined
  ]);
}
