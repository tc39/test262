// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.fromhexinto
description: Uint8Array.fromHexInto throws if its first argument is not a string
features: [uint8array-base64]
---*/

var toStringCalls = 0;
var throwyToString = {
  toString: function() {
    toStringCalls += 1;
    throw new Test262Error("toString called");
  }
};

assert.throws(TypeError, function() {
  var target = new Uint8Array(10);
  Uint8Array.fromHexInto(throwyToString, target);
});
assert.sameValue(toStringCalls, 0);
