// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.1.2.1
description: TypedArray cannot be invoked as a constructor
info: >
  22.2.1.2.1 Runtime Semantics: AllocateTypedArray (newTarget, length )

  ...
  2. If SameValue(%TypedArray%, newTarget) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

assert.throws(TypeError, function() {
  new TypedArray();
});
