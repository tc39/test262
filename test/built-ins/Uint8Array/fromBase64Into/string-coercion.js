// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Uint8Array.fromBase64Into throws if its first argument is not a string
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
  Uint8Array.fromBase64Into(throwyToString, target);
});
assert.sameValue(toStringCalls, 0);


var optionAccesses = 0;
var touchyOptions = {};
Object.defineProperty(touchyOptions, "alphabet", {
  get: function() {
    optionAccesses += 1;
    throw new Test262Error("alphabet accessed");
  }
});
Object.defineProperty(touchyOptions, "lastChunkHandling", {
  get: function() {
    optionAccesses += 1;
    throw new Test262Error("lastChunkHandling accessed");
  }
});
assert.throws(TypeError, function() {
  var target = new Uint8Array(10);
  Uint8Array.fromBase64Into(throwyToString, target, touchyOptions);
});
assert.sameValue(toStringCalls, 0);
assert.sameValue(optionAccesses, 0);
