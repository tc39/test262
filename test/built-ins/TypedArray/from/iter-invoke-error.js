// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1.1
description: Returns error produced by invoking @@iterator
info: >
  22.2.2.1.1 Runtime Semantics: TypedArrayFrom( constructor, items, mapfn,
  thisArg )

  ...
  8. If usingIterator is not undefined, then
    a. Let iterator be GetIterator(items, usingIterator).
    b. ReturnIfAbrupt(iterator).
  ...
features: [Symbol.iterator]
includes: [testTypedArray.js]
---*/

var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  TypedArray.from(iter);
});
