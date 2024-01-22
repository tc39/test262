// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Conversion of base64 strings to Uint8Arrays exercising the alphabet option
includes: [compareArray.js]
features: [uint8array-base64]
---*/

var target = new Uint8Array([255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('x+/y', target);
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [199, 239, 242, 255]);

var target = new Uint8Array([255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('x+/y', target, { alphabet: 'base64' });
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [199, 239, 242, 255]);

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255]);
  Uint8Array.fromBase64('x+/y', { alphabet: 'base64url' });
});


var target = new Uint8Array([255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('x-_y', target, { alphabet: 'base64url' });
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [199, 239, 242, 255]);

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255]);
  Uint8Array.fromBase64('x-_y');
});
assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255]);
  Uint8Array.fromBase64('x-_y', { alphabet: 'base64' });
});
