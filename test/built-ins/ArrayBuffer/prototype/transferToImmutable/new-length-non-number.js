// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [immutable-arraybuffer]
---*/

var log = [];
var newLength = {
  toString: function() {
    log.push('toString');
    return {};
  },
  valueOf: function() {
    log.push('valueOf');
    return {};
  }
};
var ab = new ArrayBuffer(0);

assert.throws(TypeError, function() {
  ab.transferToImmutable(newLength);
});

assert.sameValue(log.length, 2);
assert.sameValue(log[0], 'valueOf');
assert.sameValue(log[1], 'toString');
