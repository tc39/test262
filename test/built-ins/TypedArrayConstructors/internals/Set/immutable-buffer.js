// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: setting indexed property throws if buffer is immutable
esid: sec-integer-indexed-exotic-objects-set-p-v-receiver
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
