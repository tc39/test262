// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.sort
description: >
  Array.p.sort behaves correctly when the receiver is backed
  by a resizable buffer and passed a user-provided comparison callback
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

const ArraySortHelper = (ta, ...rest) => {
  Array.prototype.sort.call(ta, ...rest);
};

function SortWithCustomComparison() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    const taFull = new ctor(rab, 0);
    function WriteUnsortedData() {
      // Write some data into the array.
      for (let i = 0; i < taFull.length; ++i) {
        WriteToTypedArray(taFull, i, 10 - i);
      }
    }
    function CustomComparison(a, b) {
      // Sort all odd numbers before even numbers.
      a = Number(a);
      b = Number(b);
      if (a % 2 == 1 && b % 2 == 0) {
        return -1;
      }
      if (a % 2 == 0 && b % 2 == 1) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    // Orig. array: [10, 9, 8, 7]
    //              [10, 9, 8, 7] << fixedLength
    //                     [8, 7] << fixedLengthWithOffset
    //              [10, 9, 8, 7, ...] << lengthTracking
    //                     [8, 7, ...] << lengthTrackingWithOffset

    WriteUnsortedData();
    ArraySortHelper(fixedLength, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      7,
      9,
      8,
      10
    ]);
    WriteUnsortedData();
    ArraySortHelper(fixedLengthWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      7,
      8
    ]);
    WriteUnsortedData();
    ArraySortHelper(lengthTracking, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      7,
      9,
      8,
      10
    ]);
    WriteUnsortedData();
    ArraySortHelper(lengthTrackingWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      7,
      8
    ]);

    // Shrink so that fixed length TAs go out of bounds.
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    // Orig. array: [10, 9, 8]
    //              [10, 9, 8, ...] << lengthTracking
    //                     [8, ...] << lengthTrackingWithOffset

    WriteUnsortedData();
    ArraySortHelper(fixedLength, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      8
    ]);
    ArraySortHelper(fixedLengthWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      8
    ]);

    WriteUnsortedData();
    ArraySortHelper(lengthTracking, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      9,
      8,
      10
    ]);
    WriteUnsortedData();
    ArraySortHelper(lengthTrackingWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      8
    ]);

    // Shrink so that the TAs with offset go out of bounds.
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    WriteUnsortedData();
    ArraySortHelper(fixedLength, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [10]);
    ArraySortHelper(fixedLengthWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [10]);
    ArraySortHelper(lengthTrackingWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [10]);

    WriteUnsortedData();
    ArraySortHelper(lengthTracking, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [10]);

    // Shrink to zero.
    rab.resize(0);
    ArraySortHelper(fixedLength, CustomComparison);
    ArraySortHelper(fixedLengthWithOffset, CustomComparison);
    ArraySortHelper(lengthTrackingWithOffset, CustomComparison);

    ArraySortHelper(lengthTracking, CustomComparison);
    assert.compareArray(ToNumbers(taFull), []);

    // Grow so that all TAs are back in-bounds.
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    // Orig. array: [10, 9, 8, 7, 6, 5]
    //              [10, 9, 8, 7] << fixedLength
    //                     [8, 7] << fixedLengthWithOffset
    //              [10, 9, 8, 7, 6, 5, ...] << lengthTracking
    //                     [8, 7, 6, 5, ...] << lengthTrackingWithOffset

    WriteUnsortedData();
    ArraySortHelper(fixedLength, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      7,
      9,
      8,
      10,
      6,
      5
    ]);
    WriteUnsortedData();
    ArraySortHelper(fixedLengthWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      7,
      8,
      6,
      5
    ]);
    WriteUnsortedData();
    ArraySortHelper(lengthTracking, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      5,
      7,
      9,
      6,
      8,
      10
    ]);
    WriteUnsortedData();
    ArraySortHelper(lengthTrackingWithOffset, CustomComparison);
    assert.compareArray(ToNumbers(taFull), [
      10,
      9,
      5,
      7,
      6,
      8
    ]);
  }
}

SortWithCustomComparison();
