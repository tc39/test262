// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.includes
description: >
  Array.p.includes behaves correctly when receiver is backed by resizable
  buffer
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer, Array.prototype.includes]
---*/

function ArrayIncludesNumOrBigInt(array, n, fromIndex) {
  if (typeof n == 'number' && (array instanceof BigInt64Array || array instanceof BigUint64Array)) {
    return Array.prototype.includes.call(array, BigInt(n), fromIndex);
  }
  return Array.prototype.includes.call(array, n, fromIndex);
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

  assert(ArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!ArrayIncludesNumOrBigInt(fixedLength, undefined));
  assert(ArrayIncludesNumOrBigInt(fixedLength, 2, 1));
  assert(!ArrayIncludesNumOrBigInt(fixedLength, 2, 2));
  assert(ArrayIncludesNumOrBigInt(fixedLength, 2, -3));
  assert(!ArrayIncludesNumOrBigInt(fixedLength, 2, -2));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));
  assert(ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, undefined));
  assert(ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, 0));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, 1));
  assert(ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, -2));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4, -1));
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, undefined));
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 2, 1));
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, 2, 2));
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 2, -3));
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, 2, -2));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));
  assert(ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, undefined));
  assert(ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, 0));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, 1));
  assert(ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, -2));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4, -1));

  // Shrink so that fixed length TAs go out of bounds.
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);

  // Orig. array: [0, 2, 4]
  //              [0, 2, 4, ...] << lengthTracking
  //                    [4, ...] << lengthTrackingWithOffset

  assert(!ArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));

  assert(ArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, undefined));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));
  assert(ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, undefined));

  // Shrink so that the TAs with offset go out of bounds.
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  assert(!ArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));

  // Shrink to zero.
  rab.resize(0);
  assert(!ArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));

  assert(!ArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, undefined));

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

  assert(ArrayIncludesNumOrBigInt(fixedLength, 2));
  assert(!ArrayIncludesNumOrBigInt(fixedLength, undefined));
  assert(!ArrayIncludesNumOrBigInt(fixedLength, 8));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 2));
  assert(ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 4));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, undefined));
  assert(!ArrayIncludesNumOrBigInt(fixedLengthWithOffset, 8));
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 2));
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, undefined));
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 8));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 2));
  assert(ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 4));
  assert(!ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, undefined));
  assert(ArrayIncludesNumOrBigInt(lengthTrackingWithOffset, 8));
}
