// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
description: >
  Array.p.lastIndexOf behaves correctly when receiver is grown
  by argument coercion
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

function ArrayLastIndexOfNumOrBigInt(ta, n, fromIndex) {
  if (typeof n == 'number' && (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      return Array.prototype.lastIndexOf.call(ta, BigInt(n));
    }
    return Array.prototype.lastIndexOf.call(ta, BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return Array.prototype.lastIndexOf.call(ta, n);
  }
  return Array.prototype.lastIndexOf.call(ta, n, fromIndex);
}

// Growing + length-tracking TA.
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    WriteToTypedArray(lengthTracking, i, 1);
  }
  let evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -1;
    }
  };
  assert.sameValue(ArrayLastIndexOfNumOrBigInt(lengthTracking, 0), -1);
  // Because lastIndexOf iterates from the given index downwards, it's not
  // possible to test that "we only look at the data until the original
  // length" without also testing that the index conversion happening with the
  // original length.
  assert.sameValue(ArrayLastIndexOfNumOrBigInt(lengthTracking, 0, evil), -1);
}

// Growing + length-tracking TA, index conversion.
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  let evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }
  };
  assert.sameValue(ArrayLastIndexOfNumOrBigInt(lengthTracking, 0, -4), 0);
  // The TA grew but the start index conversion is done based on the original
  // length.
  assert.sameValue(ArrayLastIndexOfNumOrBigInt(lengthTracking, 0, evil), 0);
}
