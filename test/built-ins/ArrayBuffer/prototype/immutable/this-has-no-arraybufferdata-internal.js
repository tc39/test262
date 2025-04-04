// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: immmutable getter is a function that throws if receiver is not an ArrayBuffer
features: [DataView, Int8Array, ArrayBuffer, immutable-arraybuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, "immutable"
).get;

assert.sameValue(typeof getter, "function");

assert.throws(TypeError, function() {
  getter.call({});
});

assert.throws(TypeError, function() {
  getter.call([]);
});

var ta = new Int8Array(8);
assert.throws(TypeError, function() {
  getter.call(ta);
});

var dv = new DataView(new ArrayBuffer(8), 0);
assert.throws(TypeError, function() {
  getter.call(dv);
});
