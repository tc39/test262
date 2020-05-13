// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.and
description: >
  Atomics.and throws when operating on non-sharable integer TypedArrays
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray]
---*/

const buffer = new ArrayBuffer(16);

testWithNonSharableTypedArrayConstructors(function(TA) {
  const view = new TA(buffer);

  assert.throws(TypeError, function() {
    Atomics.and(view, 0, 1);
  }, `Atomics.and(new ${TA.name}(view), 0, 1) throws TypeError`);
});
