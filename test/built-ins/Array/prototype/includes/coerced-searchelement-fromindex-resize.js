// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.includes
description: >
  Array.p.includes behaves correctly when the receiver is resized during
  argument coercion
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer, Array.prototype.includes]
---*/

function ArrayIncludesNumOrBigInt(array, n, fromIndex) {
  if (typeof n == 'number' && (array instanceof BigInt64Array || array instanceof BigUint64Array)) {
    return Array.prototype.includes.call(array, BigInt(n), fromIndex);
  }
  return Array.prototype.includes.call(array, n, fromIndex);
}

for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  let evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
  assert(!ArrayIncludesNumOrBigInt(fixedLength, undefined));
  // The TA is OOB so it includes only "undefined".
  assert(ArrayIncludesNumOrBigInt(fixedLength, undefined, evil));
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  let evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
  assert(ArrayIncludesNumOrBigInt(fixedLength, 0));
  // The TA is OOB so it includes only "undefined".
  assert(!ArrayIncludesNumOrBigInt(fixedLength, 0, evil));
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  let evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, undefined));
  // "includes" iterates until the original length and sees "undefined"s.
  assert(ArrayIncludesNumOrBigInt(lengthTracking, undefined, evil));
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    WriteToTypedArray(lengthTracking, i, 1);
  }
  let evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, 0));
  // The TA grew but we only look at the data until the original length.
  assert(!ArrayIncludesNumOrBigInt(lengthTracking, 0, evil));
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  WriteToTypedArray(lengthTracking, 0, 1);
  let evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }
  };
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 1, -4));
  // The TA grew but the start index conversion is done based on the original
  // length.
  assert(ArrayIncludesNumOrBigInt(lengthTracking, 1, evil));
}
