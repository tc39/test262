// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Handling of final chunks in Uint8Array.fromBase64Into
includes: [compareArray.js]
features: [uint8array-base64]
---*/

// padding
var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg==', target);
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg==', target, { lastChunkHandling: 'loose' });
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg==', target, { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg==', target, { lastChunkHandling: 'strict' });
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);


// no padding
var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg', target);
assert.sameValue(result.read, 6);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg', target, { lastChunkHandling: 'loose' });
assert.sameValue(result.read, 6);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg', target, { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [101, 120, 97, 255, 255, 255]);

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
  Uint8Array.fromBase64Into('ZXhhZg', target, { lastChunkHandling: 'strict' });
});


// non-zero padding bits
var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZh==', target);
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZh==', target, { lastChunkHandling: 'loose' });
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZh==', target, { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
  Uint8Array.fromBase64Into('ZXhhZh==', target, { lastChunkHandling: 'strict' });
});


// non-zero padding bits, no padding
var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZh', target);
assert.sameValue(result.read, 6);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZh', target, { lastChunkHandling: 'loose' });
assert.sameValue(result.read, 6);
assert.sameValue(result.written, 4);
assert.compareArray(target, [101, 120, 97, 102, 255, 255]);

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZh', target, { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [101, 120, 97, 255, 255, 255]);

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
  Uint8Array.fromBase64Into('ZXhhZh', target, { lastChunkHandling: 'strict' });
});


// malformed padding
assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
  Uint8Array.fromBase64Into('ZXhhZg=', target);
});

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
  Uint8Array.fromBase64Into('ZXhhZg=', target, { lastChunkHandling: 'loose' });
});

var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = Uint8Array.fromBase64Into('ZXhhZg=', target, { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [101, 120, 97, 255, 255, 255]);

assert.throws(SyntaxError, function() {
  var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
  Uint8Array.fromBase64Into('ZXhhZg=', target, { lastChunkHandling: 'strict' });
});
