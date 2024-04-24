// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.copywithin
description: >
  Automatically ported from CopyWithinParameterConversionGrows test
  in V8's mjsunit test typedarray-resizablearraybuffer.js
includes: [compareArray.js]
features: [resizable-arraybuffer]
---*/

for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    WriteToTypedArray(lengthTracking, i, i);
  }
  const evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      WriteToTypedArray(lengthTracking, 4, 4);
      WriteToTypedArray(lengthTracking, 5, 5);
      return 0;
    }
  };
  // Orig. array: [0, 1, 2, 3]  [4, 5]
  //               ^     ^       ^ new elements
  //          target     start
  lengthTracking.copyWithin(evil, 2);
  assert.compareArray(ToNumbers(lengthTracking), [
    2,
    3,
    2,
    3,
    4,
    5
  ]);
  rab.resize(4 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 4; ++i) {
    WriteToTypedArray(lengthTracking, i, i);
  }

  // Orig. array: [0, 1, 2, 3]  [4, 5]
  //               ^     ^       ^ new elements
  //           start     target
  lengthTracking.copyWithin(2, evil);
  assert.compareArray(ToNumbers(lengthTracking), [
    0,
    1,
    0,
    1,
    4,
    5
  ]);
}
