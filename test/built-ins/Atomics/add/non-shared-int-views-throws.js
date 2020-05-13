// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.add
description: >
  Atomics.add throws when operating on non-sharable integer TypedArrays
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray]
---*/

const buffer = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);

testWithNonSharableTypedArrayConstructors(function(TA) {
  const view = new TA(buffer);

  assert.throws(TypeError, function() {
    Atomics.add(view, 0, 1);
  }, `Atomics.add(new ${TA.name}(view), 0, 1) throws TypeError`);
});
