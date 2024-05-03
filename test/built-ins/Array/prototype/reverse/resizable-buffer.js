// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reverse
description: >
  Array.p.reverse behaves correctly when receiver is backed by
  resizable buffer
includes: [compareArray.js]
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

function Convert(item) {
  if (typeof item == 'bigint') {
    return Number(item);
  }
  return item;
}

function ToNumbers(array) {
  let result = [];
  for (let item of array) {
    result.push(Convert(item));
  }
  return result;
}

const ArrayReverseHelper = ta => {
  Array.prototype.reverse.call(ta);
};

function TestReverse() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    const wholeArrayView = new ctor(rab);
    function WriteData() {
      // Write some data into the array.
      for (let i = 0; i < wholeArrayView.length; ++i) {
        WriteToTypedArray(wholeArrayView, i, 2 * i);
      }
    }
    WriteData();

    // Orig. array: [0, 2, 4, 6]
    //              [0, 2, 4, 6] << fixedLength
    //                    [4, 6] << fixedLengthWithOffset
    //              [0, 2, 4, 6, ...] << lengthTracking
    //                    [4, 6, ...] << lengthTrackingWithOffset

    ArrayReverseHelper(fixedLength);
    assert.compareArray(ToNumbers(wholeArrayView), [
      6,
      4,
      2,
      0
    ]);
    ArrayReverseHelper(fixedLengthWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [
      6,
      4,
      0,
      2
    ]);
    ArrayReverseHelper(lengthTracking);
    assert.compareArray(ToNumbers(wholeArrayView), [
      2,
      0,
      4,
      6
    ]);
    ArrayReverseHelper(lengthTrackingWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [
      2,
      0,
      6,
      4
    ]);

    // Shrink so that fixed length TAs go out of bounds.
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    WriteData();

    // Orig. array: [0, 2, 4]
    //              [0, 2, 4, ...] << lengthTracking
    //                    [4, ...] << lengthTrackingWithOffset

    ArrayReverseHelper(fixedLength);
    assert.compareArray(ToNumbers(wholeArrayView), [
      0,
      2,
      4
    ]);
    ArrayReverseHelper(fixedLengthWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [
      0,
      2,
      4
    ]);
    ArrayReverseHelper(lengthTracking);
    assert.compareArray(ToNumbers(wholeArrayView), [
      4,
      2,
      0
    ]);
    ArrayReverseHelper(lengthTrackingWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [
      4,
      2,
      0
    ]);

    // Shrink so that the TAs with offset go out of bounds.
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    WriteData();
    ArrayReverseHelper(fixedLength);
    assert.compareArray(ToNumbers(wholeArrayView), [0]);
    ArrayReverseHelper(fixedLengthWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [0]);
    ArrayReverseHelper(lengthTrackingWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [0]);
    ArrayReverseHelper(lengthTracking);
    assert.compareArray(ToNumbers(wholeArrayView), [0]);

    // Shrink to zero.
    rab.resize(0);
    ArrayReverseHelper(fixedLength);
    assert.compareArray(ToNumbers(wholeArrayView), []);
    ArrayReverseHelper(fixedLengthWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), []);
    ArrayReverseHelper(lengthTrackingWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), []);
    ArrayReverseHelper(lengthTracking);
    assert.compareArray(ToNumbers(wholeArrayView), []);

    // Grow so that all TAs are back in-bounds.
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    WriteData();

    // Orig. array: [0, 2, 4, 6, 8, 10]
    //              [0, 2, 4, 6] << fixedLength
    //                    [4, 6] << fixedLengthWithOffset
    //              [0, 2, 4, 6, 8, 10, ...] << lengthTracking
    //                    [4, 6, 8, 10, ...] << lengthTrackingWithOffset

    ArrayReverseHelper(fixedLength);
    assert.compareArray(ToNumbers(wholeArrayView), [
      6,
      4,
      2,
      0,
      8,
      10
    ]);
    ArrayReverseHelper(fixedLengthWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [
      6,
      4,
      0,
      2,
      8,
      10
    ]);
    ArrayReverseHelper(lengthTracking);
    assert.compareArray(ToNumbers(wholeArrayView), [
      10,
      8,
      2,
      0,
      4,
      6
    ]);
    ArrayReverseHelper(lengthTrackingWithOffset);
    assert.compareArray(ToNumbers(wholeArrayView), [
      10,
      8,
      6,
      4,
      0,
      2
    ]);
  }
}

TestReverse();
