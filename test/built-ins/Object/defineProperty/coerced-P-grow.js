// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.defineproperty
description: >
  Object.defineProperty behaves correctly when the object is a
  TypedArray backed by a resizable buffer that's grown during argument
  coercion
includes: [compareArray.js, resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

function ObjectDefinePropertyHelper(ta, index, value) {
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    Object.defineProperty(ta, index, { value: BigInt(value) });
  } else {
    Object.defineProperty(ta, index, { value: value });
  }
}

const helper = ObjectDefinePropertyHelper;

// Fixed length.
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  // Make fixedLength go OOB.
  rab.resize(2 * ctor.BYTES_PER_ELEMENT);
  const evil = {
    toString: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
  helper(fixedLength, evil, 8);
  assert.compareArray(ToNumbers(fixedLength), [
    8,
    0,
    0,
    0
  ]);
}

// Length tracking.
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab, 0);
  const evil = {
    toString: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return 4;  // Index valid after resize.
    }
  };
  helper(lengthTracking, evil, 8);
  assert.compareArray(ToNumbers(lengthTracking), [
    0,
    0,
    0,
    0,
    8,
    0
  ]);
}
