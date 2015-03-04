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
//
// Test thisArg
//
// Test String as a thisArg
var index = [1, 2, 3].findIndex(function(val, key) {
  return this.charAt(Number(key)) === String(val);
}, "321");
assert.sameValue(index, 1);

// Test object as a thisArg
var thisArg = {
  elementAt: function(key) {
    return this[key];
  }
};
Array.prototype.push.apply(thisArg, ["c", "b", "a"]);

index = ["a", "b", "c"].findIndex(function(val, key) {
  return this.elementAt(key) === val;
}, thisArg);
assert.sameValue(index, 1);

// Create a new object in each function call when receiver is a
// primitive value. See ECMA-262, Annex C.
a = [];
[1, 2].findIndex(function() { a.push(this) }, "");
assert(a[0] !== a[1]);

// Do not create a new object otherwise.
a = [];
[1, 2].findIndex(function() { a.push(this) }, {});
assert.sameValue(a[1], a[0]);

// In strict mode primitive values should not be coerced to an object.
a = [];
[1, 2].findIndex(function() { 'use strict'; a.push(this); }, "");
assert.sameValue(a[0], "");
assert.sameValue(a[1], a[0]);
