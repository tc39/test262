// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-isvalidintegerindex
description: >
  In-bound indices are testable with `in` on TypedArrays backed by resizable buffers.
info: |
  IsValidIntegerIndex ( O, index )
  ...
  6. Let length be IntegerIndexedObjectLength(O, getBufferByteLength).
  7. If length is out-of-bounds or ℝ(index) < 0 or ℝ(index) ≥ length, return false.
  ...
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

for (let ctor of ctors) {
  if (ctor.BYTES_PER_ELEMENT != 1) {
    continue;
  }
  const rab = CreateResizableArrayBuffer(16, 40);
  const array = new ctor(rab, 0, 4);
  // Within-bounds read
  for (let i = 0; i < 4; ++i) {
    assert(i in array);
  }
  rab.resize(2);
  // OOB read. If the RAB isn't large enough to fit the entire TypedArray,
  // the length of the TypedArray is treated as 0.
  for (let i = 0; i < 4; ++i) {
    assert(!(i in array));
  }
  rab.resize(4);
  // Within-bounds read
  for (let i = 0; i < 4; ++i) {
    assert(i in array);
  }
  rab.resize(40);
  // Within-bounds read
  for (let i = 0; i < 4; ++i) {
    assert(i in array);
  }
}
