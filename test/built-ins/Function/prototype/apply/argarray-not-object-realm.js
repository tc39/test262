// Copyright 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype.apply
description: >
  Throws a TypeError exception if argArray is not an object
  (honoring the Realm of the current execution context)
info: |
  Function.prototype.apply ( thisArg, argArray )

  [...]
  4. Let argList be ? CreateListFromArrayLike(argArray).

  CreateListFromArrayLike ( obj [ , elementTypes ] )

  [...]
  2. If Type(obj) is not Object, throw a TypeError exception.
features: [cross-realm]
---*/

var OFunction = $262.createRealm().global.Function;
var fn = new OFunction();

assert.throws(TypeError, function() {
  fn.apply(null, false);
});

assert.throws(TypeError, function() {
  fn.apply(null, 1234.5678);
});

assert.throws(TypeError, function() {
  fn.apply(null, '');
});

assert.throws(TypeError, function() {
  fn.apply(null, Symbol('desc'));
});
