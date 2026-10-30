// Copyright (C) 2026 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arraybuffer.prototype.transfer
description: ArrayBuffer.prototype.transfer does not consult .constructor
features: [arraybuffer-transfer]
---*/

var source = new ArrayBuffer(4);
Object.defineProperty(source, "constructor", {
  get: function () {
    throw new Test262Error("constructor should not be looked up");
  }
});

var dest = source.transfer();
assert.sameValue(source.byteLength, 0, 'source.byteLength');
assert.sameValue(dest.byteLength, 4, 'dest.byteLength');
