// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-isvalidintegerindex
description: >
  Getting and setting in-bounds and out-of-bounds indices on TypedArrays backed
  by resizable buffers.
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

for (let ctor of ctors) {
  if (ctor.BYTES_PER_ELEMENT != 1) {
    continue;
  }
  const rab = CreateResizableArrayBuffer(16, 40);
  const array = new ctor(rab, 0, 4);
  // Initial values
  for (let i = 0; i < 4; ++i) {
    assert.sameValue(array[i], 0);
  }
  // Within-bounds write
  for (let i = 0; i < 4; ++i) {
    array[i] = i;
  }
  // Within-bounds read
  for (let i = 0; i < 4; ++i) {
    assert.sameValue(array[i], i);
  }
  rab.resize(2);
  // OOB read. If the RAB isn't large enough to fit the entire TypedArray,
  // the length of the TypedArray is treated as 0.
  for (let i = 0; i < 4; ++i) {
    assert.sameValue(array[i], undefined);
  }
  // OOB write (has no effect)
  for (let i = 0; i < 4; ++i) {
    array[i] = 10;
  }
  rab.resize(4);
  // Within-bounds read
  for (let i = 0; i < 2; ++i) {
    assert.sameValue(array[i], i);
  }
  // The shrunk-and-regrown part got zeroed.
  for (let i = 2; i < 4; ++i) {
    assert.sameValue(array[i], 0);
  }
  rab.resize(40);
  // Within-bounds read
  for (let i = 0; i < 2; ++i) {
    assert.sameValue(array[i], i);
  }
  for (let i = 2; i < 4; ++i) {
    assert.sameValue(array[i], 0);
  }
}
