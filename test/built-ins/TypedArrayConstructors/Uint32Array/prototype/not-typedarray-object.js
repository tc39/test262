// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.6
esid: sec-properties-of-typedarray-prototype-objects
description: >
  Uint32Array.prototype is not a TypedArray instance object.
info: |
  A TypedArray prototype object is an ordinary object. It does not have
  a [[ViewedArrayBuffer]] or any other of the internal slots that are
  specific to TypedArray instance objects.
features: [TypedArray]
---*/

assert.throws(TypeError, function() {
  Uint32Array.prototype.buffer;
});
