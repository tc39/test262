// Copyright (C) 2026 Richard Gibson.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.or
description: >
  Atomics.or should revalidate index after argument coercion
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray, resizable-arraybuffer]
---*/

testWithTypedArrayConstructors(function(TA) {
  testAtomicsIndexRevalidation(TA, function(view, makeIndex) {
    Atomics.or(view, { valueOf: makeIndex }, '10');
  });
}, nonClampedIntArrayConstructors.concat(bigIntArrayConstructors), ["passthrough"]);
