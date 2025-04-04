// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
includes: [testTypedArray.js]
features: [TypedArray, immutable-arraybuffer]
---*/

testWithTypedArrayConstructors(function(TA) {
  var buffer = new ArrayBuffer(42 * TA.BYTES_PER_ELEMENT);
  var sample = new TA(buffer.transferToImmutable());
  assert.throws(TypeError, function() {
  	sample[0] = 1;
  });
});
