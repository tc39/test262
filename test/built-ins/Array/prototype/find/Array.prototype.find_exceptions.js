// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
    The find() method returns a value in the array, if an
    element in the array satisfies the provided testing function.
    Otherwise undefined is returned.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
includes: [compareArray.js]
---*/


// Test exceptions
assert.throws(TypeError, function() {
  Array.prototype.find.call(null, function() { });
});
assert.throws(TypeError, function() {
  Array.prototype.find.call(undefined, function() { });
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply(null, function() { }, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply(undefined, function() { }, []);
});

assert.throws(TypeError, function() {
  [].find(null);
});
assert.throws(TypeError, function() {
  [].find(undefined);
});
assert.throws(TypeError, function() {
  [].find(0);
});
assert.throws(TypeError, function() {
  [].find(true);
});
assert.throws(TypeError, function() {
  [].find(false);
});
assert.throws(TypeError, function() {
  [].find("");
});
assert.throws(TypeError, function() {
  [].find({});
});
assert.throws(TypeError, function() {
  [].find([]);
});
assert.throws(TypeError, function() {
  [].find(/\d+/);
});

assert.throws(TypeError, function() {
  Array.prototype.find.call({}, null);
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, undefined);
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, 0);
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, true);
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, false);
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, "");
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, {});
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.call({}, /\d+/);
});

assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, null, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, undefined, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, 0, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, true, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, false, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, "", []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, {}, []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, [], []);
});
assert.throws(TypeError, function() {
  Array.prototype.find.apply({}, /\d+/, []);
});
