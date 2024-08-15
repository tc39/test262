// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.slice
description: >
  TypedArray.p.slice behaves correctly when the receiver is backed by
  resizable buffer that is grown by argument coercion
includes: [compareArray.js, resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

const TypedArraySliceHelper = (ta, ...rest) => {
  return ta.slice(...rest);
};

function SliceParameterConversionGrows() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = {
      valueOf: () => {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
        return 0;
      }
    };
    assert.compareArray(ToNumbers(TypedArraySliceHelper(lengthTracking, evil)), [
      1,
      2,
      3,
      4
    ]);
    assert.sameValue(rab.byteLength, 6 * ctor.BYTES_PER_ELEMENT);
  }
}

SliceParameterConversionGrows();
