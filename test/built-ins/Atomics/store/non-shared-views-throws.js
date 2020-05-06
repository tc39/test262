// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.store
description: >
  Atomics.store throws when operating on non-sharable integer TypedArrays
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray]
---*/

const buffer = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const views = intArrayConstructors.slice();

testWithNonSharableTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    Atomics.store(new TA(buffer), 0, 0);
  }, `Atomics.store(new ${TA.name}(view), 0, 1) throws TypeError`);
}, views);
