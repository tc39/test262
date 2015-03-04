// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    The findIndex() method returns an index in the array, if an element
    in the array satisfies the provided testing function. Otherwise -1 is returned.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
---*/
// Test exceptions
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call(null, function() { });
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call(undefined, function() { });
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply(null, function() { }, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply(undefined, function() { }, []);
});

assert.throws(TypeError, function() {
  [].findIndex(null);
});
assert.throws(TypeError, function() {
  [].findIndex(undefined);
});
assert.throws(TypeError, function() {
  [].findIndex(0);
});
assert.throws(TypeError, function() {
  [].findIndex(true);
});
assert.throws(TypeError, function() {
  [].findIndex(false);
});
assert.throws(TypeError, function() {
  [].findIndex("");
});
assert.throws(TypeError, function() {
  [].findIndex({});
});
assert.throws(TypeError, function() {
  [].findIndex([]);
});
assert.throws(TypeError, function() {
  [].findIndex(/\d+/);
});

assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, null);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, undefined);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, 0);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, true);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, false);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, "");
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, {});
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.call({}, /\d+/);
});

assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, null, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, undefined, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, 0, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, true, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, false, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, "", []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, {}, []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, [], []);
});
assert.throws(TypeError, function() {
  Array.prototype.findIndex.apply({}, /\d+/, []);
});
