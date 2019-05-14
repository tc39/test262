// Copyright 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype.apply
description: >
  Throws a TypeError exception if this value is not callable
  (honoring the Realm of the current execution context)
info: |
  Function.prototype.apply ( thisArg, argArray )

  1. Let func be the this value.
  2. If IsCallable(func) is false, throw a TypeError exception.
features: [cross-realm]
---*/

var OFunction = $262.createRealm().global.Function;

assert.throws(TypeError, function() {
  OFunction.prototype.apply.call(undefined, {}, []);
});

assert.throws(TypeError, function() {
  OFunction.prototype.apply.call(null, {}, []);
});

assert.throws(TypeError, function() {
  OFunction.prototype.apply.call({}, {}, []);
});

assert.throws(TypeError, function() {
  OFunction.prototype.apply.call(/re/, {}, []);
});
