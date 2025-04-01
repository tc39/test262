// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [immutable-arraybuffer, Symbol, BigInt]
---*/

assert.sameValue(typeof ArrayBuffer.prototype.transferToImmutable, "function");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(undefined);
}, "`this` value is undefined");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(null);
}, "`this` value is null");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(true);
}, "`this` value is Boolean");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call("");
}, "`this` value is String");

var symbol = Symbol();
assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(symbol);
}, "`this` value is Symbol");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(1);
}, "`this` value is Number");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(1n);
}, "`this` value is bigint");
