// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.indexof
description: >
  TypedArray.p.indexOf behaves correctly when receiver is backed by resizable
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

function TypedArrayIndexOfHelper(ta, n, fromIndex) {
  if (typeof n == 'number' && (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      return ta.indexOf(BigInt(n));
    }
    return ta.indexOf(BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return ta.indexOf(n);
  }
  return ta.indexOf(n, fromIndex);
}

function TestIndexOf() {
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

    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 0), 0);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 0, 1), 1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 0, 2), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 0, -2), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 0, -3), 1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 1, 1), 2);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 1, -3), 2);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 1, -2), 2);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 0), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 1), 0);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 1, -2), 0);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 1, -1), 1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 0), 0);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 0, 2), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 1, -3), 2);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 0), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 1), 0);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 1, 1), 1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 1, -2), 0);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, undefined), -1);

    // Shrink so that fixed length TAs go out of bounds.
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    // Orig. array: [0, 0, 1]
    //              [0, 0, 1, ...] << lengthTracking
    //                    [1, ...] << lengthTrackingWithOffset

    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(fixedLength, 1);
    });
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(fixedLengthWithOffset, 1);
    });

    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 1), 2);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 0), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 1), 0);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, undefined), -1);

    // Shrink so that the TAs with offset go out of bounds.
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(fixedLength, 0);
    });
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(fixedLengthWithOffset, 0);
    });
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(lengthTrackingWithOffset, 0);
    });

    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 0), 0);

    // Shrink to zero.
    rab.resize(0);
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(fixedLength, 0);
    });
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(fixedLengthWithOffset, 0);
    });
    assert.throws(TypeError, () => {
      TypedArrayIndexOfHelper(lengthTrackingWithOffset, 0);
    });

    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 0), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, undefined), -1);

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

    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 1), 2);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, 2), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLength, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 0), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 1), 0);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, 2), -1);
    assert.sameValue(TypedArrayIndexOfHelper(fixedLengthWithOffset, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 1), 2);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, 2), 4);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTracking, undefined), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 0), -1);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 1), 0);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, 2), 2);
    assert.sameValue(TypedArrayIndexOfHelper(lengthTrackingWithOffset, undefined), -1);
  }
}

TestIndexOf();
