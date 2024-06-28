// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.keys
description: >
  TypedArray.p.keys behaves correctly when receiver is backed by resizable
  buffer that is shrunk mid-iteration
features: [resizable-arraybuffer]
includes: [compareArray.js]
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

function TypedArrayKeysHelper(ta) {
  return ta.keys();
}

function TestIterationAndResize(ta, expected, rab, resize_after, new_byte_length) {
  let values = [];
  let resized = false;
  for (const value of ta) {
    if (value instanceof Array) {
      values.push([
        value[0],
        Number(value[1])
      ]);
    } else {
      values.push(Number(value));
    }
    if (!resized && values.length == resize_after) {
      rab.resize(new_byte_length);
      resized = true;
    }
  }
  assert.compareArray(values.flat(), expected.flat());
  assert(resized);
}

function KeysShrinkMidIteration() {
  // Orig. array: [0, 2, 4, 6]
  //              [0, 2, 4, 6] << fixedLength
  //                    [4, 6] << fixedLengthWithOffset
  //              [0, 2, 4, 6, ...] << lengthTracking
  //                    [4, 6, ...] << lengthTrackingWithOffset
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  // Iterating with keys() (the 4 loops below).
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    // The fixed length array goes out of bounds when the RAB is resized.
    assert.throws(TypeError, () => {
      TestIterationAndResize(TypedArrayKeysHelper(fixedLength), null, rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
    });
  }
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    // The fixed length array goes out of bounds when the RAB is resized.
    assert.throws(TypeError, () => {
      TestIterationAndResize(TypedArrayKeysHelper(fixedLengthWithOffset), null, rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
    });
  }
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    TestIterationAndResize(TypedArrayKeysHelper(lengthTracking), [
      0,
      1,
      2
    ], rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    TestIterationAndResize(TypedArrayKeysHelper(lengthTrackingWithOffset), [
      0,
      1
    ], rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }
}

KeysShrinkMidIteration();
