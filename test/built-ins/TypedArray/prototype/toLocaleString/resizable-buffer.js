// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.tolocalestring
description: >
  TypedArray.p.toLocaleString behaves correctly when the receiver is
  backed by resizable buffer
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

const TypedArrayToLocaleStringHelper = (ta, ...rest) => {
  return ta.toLocaleString(...rest);
};

function TestToLocaleString() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    const taWrite = new ctor(rab);

    // Write some data into the array.
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    // Orig. array: [0, 2, 4, 6]
    //              [0, 2, 4, 6] << fixedLength
    //                    [4, 6] << fixedLengthWithOffset
    //              [0, 2, 4, 6, ...] << lengthTracking
    //                    [4, 6, ...] << lengthTrackingWithOffset

    assert.sameValue(TypedArrayToLocaleStringHelper(fixedLength), '0,2,4,6');
    assert.sameValue(TypedArrayToLocaleStringHelper(fixedLengthWithOffset), '4,6');
    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTracking), '0,2,4,6');
    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTrackingWithOffset), '4,6');

    // Shrink so that fixed length TAs go out of bounds.
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    // Orig. array: [0, 2, 4]
    //              [0, 2, 4, ...] << lengthTracking
    //                    [4, ...] << lengthTrackingWithOffset

    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(fixedLength);
    });
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(fixedLengthWithOffset);
    });

    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTracking), '0,2,4');
    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTrackingWithOffset), '4');

    // Shrink so that the TAs with offset go out of bounds.
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(fixedLength);
    });
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(fixedLengthWithOffset);
    });
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(lengthTrackingWithOffset);
    });

    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTracking), '0');

    // Shrink to zero.
    rab.resize(0);
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(fixedLength);
    });
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(fixedLengthWithOffset);
    });
    assert.throws(TypeError, () => {
      TypedArrayToLocaleStringHelper(lengthTrackingWithOffset);
    });

    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTracking), '');

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

    assert.sameValue(TypedArrayToLocaleStringHelper(fixedLength), '0,2,4,6');
    assert.sameValue(TypedArrayToLocaleStringHelper(fixedLengthWithOffset), '4,6');
    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTracking), '0,2,4,6,8,10');
    assert.sameValue(TypedArrayToLocaleStringHelper(lengthTrackingWithOffset), '4,6,8,10');
  }
}

TestToLocaleString();
