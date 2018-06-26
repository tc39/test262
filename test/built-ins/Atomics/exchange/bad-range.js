// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.exchange
description: >
  Test range checking of Atomics.exchange on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
var views = intArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  let view = new TA(buffer);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.exchange(view, IdxGen(view), 10, 0);
    }, 'Atomics.exchange(view, IdxGen(view), 10, 0) throws RangeError');
  });
}, views);
