// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1.1
description: Returns error produced by accessing array-like's length
info: >
  22.2.2.1.1 Runtime Semantics: TypedArrayFrom( constructor, items, mapfn, thisArg )

  ...
  12. Let len be ToLength(Get(arrayLike, "length")).
  13. ReturnIfAbrupt(len).
  ...
includes: [testTypedArray.js]
---*/

var arrayLike = {};

Object.defineProperty(arrayLike, 'length', {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  TypedArray.from(arrayLike);
});
