// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.lastindexof
description: >
  TypedArray.p.lastIndexOf behaves correctly when receiver is shrunk
  by argument coercion
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

function TypedArrayLastIndexOfHelper(ta, n, fromIndex) {
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

function LastIndexOfParameterConversionShrinks() {
  // Shrinking + fixed-length TA.
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    let evil = {
      valueOf: () => {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        return 2;
      }
    };
    assert.sameValue(TypedArrayLastIndexOfHelper(fixedLength, 0), 3);
    // The TA is OOB so lastIndexOf returns -1.
    assert.sameValue(TypedArrayLastIndexOfHelper(fixedLength, 0, evil), -1);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    let evil = {
      valueOf: () => {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        return 2;
      }
    };
    assert.sameValue(TypedArrayLastIndexOfHelper(fixedLength, 0), 3);
    // The TA is OOB so lastIndexOf returns -1, also for undefined).
    assert.sameValue(TypedArrayLastIndexOfHelper(fixedLength, undefined, evil), -1);
  }

  // Shrinking + length-tracking TA.
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }
    let evil = {
      valueOf: () => {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        return 2;
      }
    };
    assert.sameValue(TypedArrayLastIndexOfHelper(lengthTracking, 2), 2);
    // 2 no longer found.
    assert.sameValue(TypedArrayLastIndexOfHelper(lengthTracking, 2, evil), -1);
  }
}

LastIndexOfParameterConversionShrinks();
