// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
includes: [isConstructor.js]
features: [immutable-arraybuffer, Reflect.construct]
---*/

assert(!isConstructor(ArrayBuffer.prototype.transferToImmutable), "ArrayBuffer.prototype.transferToImmutable is not a constructor");

var arrayBuffer = new ArrayBuffer(8);
assert.throws(TypeError, function() {
  new arrayBuffer.transfer();
});
