// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1
description: >
  "from" cannot be invoked as a method of %TypedArray%
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  6. Return TypedArrayFrom(C, source, f, t).

  22.2.2.1.1 Runtime Semantics: TypedArrayFrom( constructor, items, mapfn,
  thisArg )

  ...
  8. If usingIterator is not undefined, then
    ...
    g. Let targetObj be AllocateTypedArray(C, len).
    h. ReturnIfAbrupt(targetObj).
    ...

  22.2.1.2.1 Runtime Semantics: AllocateTypedArray (newTarget, length )

  ...
  2. If SameValue(%TypedArray%, newTarget) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

assert.throws(TypeError, function() {
  TypedArray.from([]);
});
