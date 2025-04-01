// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
includes: [testTypedArray.js]
features: [Reflect, TypedArray, immutable-arraybuffer]
---*/

var desc = {
  value: 0,
  configurable: true,
  enumerable: true,
  writable: true
};

testWithTypedArrayConstructors(function(TA) {
  var buffer = new ArrayBuffer(42 * TA.BYTES_PER_ELEMENT);
  var sample = new TA(buffer.transferToImmutable());
  assert.throws(TypeError, function() {
    Reflect.defineProperty(sample, "0", desc);
  });
});
