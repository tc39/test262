// Copyright (C) 2019 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Promise.any invoked on a non-object value
esid: sec-promise.any
info: |
  1. Let C be the this value.
  2. If Type(C) is not Object, throw a TypeError exception.
features: [Promise.any, Symbol]
---*/

assert.throws(TypeError, function() {
  Promise.any.call(undefined, []);
});

assert.throws(TypeError, function() {
  Promise.any.call(null, []);
});

assert.throws(TypeError, function() {
  Promise.any.call(86, []);
});

assert.throws(TypeError, function() {
  Promise.any.call('string', []);
});

assert.throws(TypeError, function() {
  Promise.any.call(true, []);
});

assert.throws(TypeError, function() {
  Promise.any.call(Symbol(), []);
});
