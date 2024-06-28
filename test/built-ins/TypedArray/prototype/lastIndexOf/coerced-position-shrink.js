// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.lastindexof
description: >
  TypedArray.p.lastIndexOf behaves correctly when receiver is shrunk
  by argument coercion
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
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0), 3);
  // The TA is OOB so lastIndexOf returns -1.
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0, evil), -1);
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
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, 0), 3);
  // The TA is OOB so lastIndexOf returns -1, also for undefined).
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(fixedLength, undefined, evil), -1);
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
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 2), 2);
  // 2 no longer found.
  assert.sameValue(TypedArrayLastIndexOfNumOrBigInt(lengthTracking, 2, evil), -1);
}
