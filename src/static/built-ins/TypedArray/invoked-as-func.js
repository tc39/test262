// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.1.1
description: If NewTarget is undefined, throw a TypeError exception.
info: >
  22.2.1.1 %TypedArray% ( )

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

assert.throws(TypeError, function() {
  TypedArray();
});
