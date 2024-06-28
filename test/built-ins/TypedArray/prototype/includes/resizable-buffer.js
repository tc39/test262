// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.includes
description: >
  TypedArray.p.includes behaves correctly when receiver is backed by resizable
  buffer
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer, Array.prototype.includes]
---*/

function TypedArrayIncludesNumOrBigInt(array, n, fromIndex) {
  if (typeof n == 'number' && (array instanceof BigInt64Array || array instanceof BigUint64Array)) {
    return array.includes(BigInt(n), fromIndex);
  }
  return array.includes(n, fromIndex);
}

for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

  // Write some data into the array.
  const taWrite = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    WriteToTypedArray(taWrite, i, 2 * i);
  }

  // Orig. array: [0, 2, 4, 6]
  //              [0, 2, 4, 6] << fixedLength
  //                    [4, 6] << fixedLengthWithOffset
  //              [0, 2, 4, 6, ...] << lengthTracking
  //                    [4, 6, ...] << lengthTrackingWithOffset

  assert(TypedArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLength, undefined));
  assert(TypedArrayIncludesNumOrBigInt(fixedLength, 2, 1));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLength, 2, 2));
  assert(TypedArrayIncludesNumOrBigInt(fixedLength, 2, -3));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLength, 2, -2));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));
  assert(TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, undefined));
  assert(TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, 0));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, 1));
  assert(TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, -2));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, -1));
  assert(TypedArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, undefined));
  assert(TypedArrayIncludesNumOrBigInt(lengthTracking, 2, 1));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, 2, 2));
  assert(TypedArrayIncludesNumOrBigInt(lengthTracking, 2, -3));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, 2, -2));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));
  assert(TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, undefined));
  assert(TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, 0));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, 1));
  assert(TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, -2));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, -1));

  // Shrink so that fixed length TAs go out of bounds.
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);

  // Orig. array: [0, 2, 4]
  //              [0, 2, 4, ...] << lengthTracking
  //                    [4, ...] << lengthTrackingWithOffset

  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(fixedLength, 2);
  });
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2);
  });

  assert(TypedArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, undefined));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));
  assert(TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, undefined));

  // Shrink so that the TAs with offset go out of bounds.
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(fixedLength, 2);
  });
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2);
  });
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2);
  });

  // Shrink to zero.
  rab.resize(0);
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(fixedLength, 2);
  });
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2);
  });
  assert.throws(TypeError, () => {
    TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2);
  });
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, undefined));

  // Grow so that all TAs are back in-bounds.
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 6; ++i) {
    WriteToTypedArray(taWrite, i, 2 * i);
  }

  // Orig. array: [0, 2, 4, 6, 8, 10]
  //              [0, 2, 4, 6] << fixedLength
  //                    [4, 6] << fixedLengthWithOffset
  //              [0, 2, 4, 6, 8, 10, ...] << lengthTracking
  //                    [4, 6, 8, 10, ...] << lengthTrackingWithOffset

  assert(TypedArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLength, undefined));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLength, 8));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));
  assert(TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, undefined));
  assert(!TypedArrayIncludesNumOrBigInt(fixedLengthWithOffset, 8));
  assert(TypedArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTracking, undefined));
  assert(TypedArrayIncludesNumOrBigInt(lengthTracking, 8));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));
  assert(TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4));
  assert(!TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, undefined));
  assert(TypedArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 8));
}
