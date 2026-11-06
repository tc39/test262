// Copyright (C) 2026 Richard Gibson.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.compareexchange
description: >
  Atomics.compareExchange should revalidate index after argument coercion
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray, resizable-arraybuffer]
---*/

testWithTypedArrayConstructors(function(TA) {
  testAtomicsIndexRevalidation(TA, function(view, makeIndex) {
    Atomics.compareExchange(view, { valueOf: makeIndex }, '10', '0');
  });
}, nonClampedIntArrayConstructors.concat(bigIntArrayConstructors), ["passthrough"]);
