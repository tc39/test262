// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
includes: [compareArray.js]
---*/

// Array.of Check superficial features.

var desc = Object.getOwnPropertyDescriptor(Array, "of");

assert.sameValue(desc.configurable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.writable, true);
assert.sameValue(Array.of.length, 0);
assert.throws(TypeError, function() { new Array.of() });  // not a constructor

// When the this-value passed in is not a constructor, the result is an array.
[
  undefined,
  null,
  false,
  "cow",
  NaN,
  67,
  Infinity,
  -Infinity,
  Math.cos, // builtin functions with no [[Construct]] slot
  Math.cos.bind(Math) // bound builtin functions with no [[Construct]] slot
].forEach(function(val) {
  assert.sameValue(Array.isArray(Array.of.call(val, val)), true);
});


var boundFn = (function() {}).bind(null);
var instance = Array.of.call(boundFn, 1, 2, 3);
assert.sameValue(instance.length, 3);
assert.sameValue(instance instanceof boundFn, true);
assert.sameValue(Array.isArray(instance), false);
