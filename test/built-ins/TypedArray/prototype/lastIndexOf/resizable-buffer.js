// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.lastindexof
description: >
  TypedArray.p.lastIndexOf behaves correctly when receiver is backed by resizable
  buffer
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

function TypedArrayLastIndexOfNumOrBigInt(ta, n, fromIndex) {
  if (typeof n == 'number' && (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      return ta.lastIndexOf(BigInt(n));
    }
    return ta.lastIndexOf(BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return ta.lastIndexOf(n);
  }
  return ta.lastIndexOf(n, fromIndex);
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
    WriteToTypedArray(taWrite, i, Math.floor(i / 2));
  }

  // Orig. array: [0, 0, 1, 1]
  //              [0, 0, 1, 1] << fixedLength
  //                    [1, 1] << fixedLengthWithOffset
  //              [0, 0, 1, 1, ...] << lengthTracking
  //                    [1, 1, ...] << lengthTrackingWithOffset

  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0, 1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0, 2), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0, -2), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0, -3), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 1, 1), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 1, -2), 2);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 1, -3), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 0), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 1, -2), 0);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 1, -1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 0), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 0, 2), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 0, -3), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 1, 1), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 1, 2), 2);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 1, -3), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 0), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 1, 1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 1, -2), 0);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 1, -1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, undefined), -1);

  // Shrink so that fixed length TAs go out of bounds.
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);

  // Orig. array: [0, 0, 1]
  //              [0, 0, 1, ...] << lengthTracking
  //                    [1, ...] << lengthTrackingWithOffset

  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(fixedLength, 1);
  });
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 1);
  });

  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 0), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 0), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 1), 0);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, undefined), -1);

  // Shrink so that the TAs with offset go out of bounds.
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0);
  });
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 0);
  });
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 0);
  });

  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 0), 0);

  // Shrink to zero.
  rab.resize(0);
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0);
  });
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 0);
  });
  assert.throws(TypeError, () => {
    TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 0);
  });

  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 0), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, undefined), -1);

  // Grow so that all TAs are back in-bounds.
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 6; ++i) {
    WriteToTypedArray(taWrite, i, Math.floor(i / 2));
  }

  // Orig. array: [0, 0, 1, 1, 2, 2]
  //              [0, 0, 1, 1] << fixedLength
  //                    [1, 1] << fixedLengthWithOffset
  //              [0, 0, 1, 1, 2, 2, ...] << lengthTracking
  //                    [1, 1, 2, 2, ...] << lengthTrackingWithOffset

  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 1), 3);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 2), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 0), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, 2), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLengthWithOffset, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 1), 3);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 2), 5);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, undefined), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 0), -1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 1), 1);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, 2), 3);
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTrackingWithOffset, undefined), -1);
}
