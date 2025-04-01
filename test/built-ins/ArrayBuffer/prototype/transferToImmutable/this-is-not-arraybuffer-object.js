// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [immutable-arraybuffer]
---*/

assert.sameValue(typeof ArrayBuffer.prototype.transferToImmutable, 'function');

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable();
}, '`this` value is the ArrayBuffer prototype');

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call({});
}, '`this` value is an object');

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call([]);
}, '`this` value is an array');
