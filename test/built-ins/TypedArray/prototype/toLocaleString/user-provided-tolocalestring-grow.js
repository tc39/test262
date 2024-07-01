// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.tolocalestring
description: >
  TypedArray.p.toLocaleString behaves correctly when {Number,BigInt}.
  prototype.toLocaleString is replaced with a user-provided function
  that grows the underlying resizable buffer.
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

const oldNumberPrototypeToLocaleString = Number.prototype.toLocaleString;
const oldBigIntPrototypeToLocaleString = BigInt.prototype.toLocaleString;

// Growing + fixed-length TA.
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  let resizeAfter = 2;
  Number.prototype.toLocaleString = function () {
    --resizeAfter;
    if (resizeAfter == 0) {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    }
    return oldNumberPrototypeToLocaleString.call(this);
  };
  BigInt.prototype.toLocaleString = function () {
    --resizeAfter;
    if (resizeAfter == 0) {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    }
    return oldBigIntPrototypeToLocaleString.call(this);
  };

  // We iterate 4 elements since it was the starting length. Resizing doesn't
  // affect the TA.
  assert.sameValue(fixedLength.toLocaleString(), '0,0,0,0');
}

// Growing + length-tracking TA.
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  let resizeAfter = 2;
  Number.prototype.toLocaleString = function () {
    --resizeAfter;
    if (resizeAfter == 0) {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    }
    return oldNumberPrototypeToLocaleString.call(this);
  };
  BigInt.prototype.toLocaleString = function () {
    --resizeAfter;
    if (resizeAfter == 0) {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    }
    return oldBigIntPrototypeToLocaleString.call(this);
  };

  // We iterate 4 elements since it was the starting length.
  assert.sameValue(lengthTracking.toLocaleString(), '0,0,0,0');
}
Number.prototype.toLocaleString = oldNumberPrototypeToLocaleString;
BigInt.prototype.toLocaleString = oldBigIntPrototypeToLocaleString;
