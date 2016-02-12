// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-%typedarray%.of
description: >
  Throws a TypeError exception if this is not a constructor
info: >
  22.2.2.2 %TypedArray%.of ( ...items )

  ...
  3. Let C be the this value.
  4. If IsConstructor(C) is false, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

var m = { m() {} }.m;

assert.throws(TypeError, function() {
  TypedArray.of.call(m, []);
});
