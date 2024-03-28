// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.findLast
description: >
  Array.p.findLast behaves correctly when receiver is backed by resizable
  buffer
features: [resizable-arraybuffer]
---*/

class MyUint8Array extends Uint8Array {
}

class MyFloat32Array extends Float32Array {
}

class MyBigInt64Array extends BigInt64Array {
}

const builtinCtors = [
  Uint8Array,
  Int8Array,
  Uint16Array,
  Int16Array,
  Uint32Array,
  Int32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray,
  BigUint64Array,
  BigInt64Array
];

const ctors = [
  ...builtinCtors,
  MyUint8Array,
  MyFloat32Array,
  MyBigInt64Array
];

function CreateResizableArrayBuffer(byteLength, maxByteLength) {
  return new ArrayBuffer(byteLength, { maxByteLength: maxByteLength });
}

function WriteToTypedArray(array, index, value) {
  if (array instanceof BigInt64Array || array instanceof BigUint64Array) {
    array[index] = BigInt(value);
  } else {
    array[index] = value;
  }
}

function ArrayFindLastHelper(ta, p) {
  return Array.prototype.findLast.call(ta, p);
}

function TestFindLast() {
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

    function isTwoOrFour(n) {
      return n == 2 || n == 4;
    }
    assert.sameValue(Number(ArrayFindLastHelper(fixedLength, isTwoOrFour)), 4);
    assert.sameValue(Number(ArrayFindLastHelper(fixedLengthWithOffset, isTwoOrFour)), 4);
    assert.sameValue(Number(ArrayFindLastHelper(lengthTracking, isTwoOrFour)), 4);
    assert.sameValue(Number(ArrayFindLastHelper(lengthTrackingWithOffset, isTwoOrFour)), 4);

    // Shrink so that fixed length TAs go out of bounds.
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    // Orig. array: [0, 2, 4]
    //              [0, 2, 4, ...] << lengthTracking
    //                    [4, ...] << lengthTrackingWithOffset

    assert.sameValue(ArrayFindLastHelper(fixedLength, isTwoOrFour), undefined);
    assert.sameValue(ArrayFindLastHelper(fixedLengthWithOffset, isTwoOrFour), undefined);

    assert.sameValue(Number(ArrayFindLastHelper(lengthTracking, isTwoOrFour)), 4);
    assert.sameValue(Number(ArrayFindLastHelper(lengthTrackingWithOffset, isTwoOrFour)), 4);

    // Shrink so that the TAs with offset go out of bounds.
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    assert.sameValue(ArrayFindLastHelper(fixedLength, isTwoOrFour), undefined);
    assert.sameValue(ArrayFindLastHelper(fixedLengthWithOffset, isTwoOrFour), undefined);
    assert.sameValue(ArrayFindLastHelper(lengthTrackingWithOffset, isTwoOrFour), undefined);

    assert.sameValue(ArrayFindLastHelper(lengthTracking, isTwoOrFour), undefined);

    // Shrink to zero.
    rab.resize(0);
    assert.sameValue(ArrayFindLastHelper(fixedLength, isTwoOrFour), undefined);
    assert.sameValue(ArrayFindLastHelper(fixedLengthWithOffset, isTwoOrFour), undefined);
    assert.sameValue(ArrayFindLastHelper(lengthTrackingWithOffset, isTwoOrFour), undefined);

    assert.sameValue(ArrayFindLastHelper(lengthTracking, isTwoOrFour), undefined);

    // Grow so that all TAs are back in-bounds.
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 0);
    }
    WriteToTypedArray(taWrite, 4, 2);
    WriteToTypedArray(taWrite, 5, 4);

    // Orig. array: [0, 0, 0, 0, 2, 4]
    //              [0, 0, 0, 0] << fixedLength
    //                    [0, 0] << fixedLengthWithOffset
    //              [0, 0, 0, 0, 2, 4, ...] << lengthTracking
    //                    [0, 0, 2, 4, ...] << lengthTrackingWithOffset

    assert.sameValue(ArrayFindLastHelper(fixedLength, isTwoOrFour), undefined);
    assert.sameValue(ArrayFindLastHelper(fixedLengthWithOffset, isTwoOrFour), undefined);
    assert.sameValue(Number(ArrayFindLastHelper(lengthTracking, isTwoOrFour)), 4);
    assert.sameValue(Number(ArrayFindLastHelper(lengthTrackingWithOffset, isTwoOrFour)), 4);
  }
}

TestFindLast();
