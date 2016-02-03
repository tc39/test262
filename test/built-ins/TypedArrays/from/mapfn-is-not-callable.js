// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-%typedarray%.from
description: Throw a TypeError exception is mapfn is not callable
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  3. If mapfn was supplied and mapfn is not undefined, then
    a. If IsCallable(mapfn) is false, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [Symbol.iterator]
---*/

var arrayLike = {};
Object.defineProperty(arrayLike, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(TypeError, function() {
  TypedArray.from(arrayLike, 42);
});
