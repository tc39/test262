// Copyright (C) 2026 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arraybuffer.prototype.resize
description: ArrayBuffer.prototype.resize does not consult .constructor
features: [resizable-arraybuffer]
---*/

var source = new ArrayBuffer(4, { maxByteLength: 4 });

var gotConstructor = false;
Object.defineProperty(source, "constructor", {
  get: function () {
    gotConstructor = true;
    throw new Test262Error("constructor should not be looked up");
  }
});

try {
  result = source.resize(4);
} catch (error) {
  // Hosts may choose to throw; this does not affect the test either way.
  // We cannot assert on the type of error but we can rely on it not being Test262Error.
  assert.sameValue(error instanceof Test262Error, false);
}

assert.sameValue(gotConstructor, false, 'source.constructor should not be looked up');
