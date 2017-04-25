// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `dotAll` accessor invoked on a non-object value
esid: pending
info: >
    get RegExp.prototype.dotAll

    1. Let R be the this value.
    2. If Type(R) is not Object, throw a TypeError exception.
features: [Symbol, regexp-dotall]
---*/

var dotAll = Object.getOwnPropertyDescriptor(RegExp.prototype, 'dotAll').get;

assert.throws(TypeError, function() {
  dotAll.call(undefined);
});

assert.throws(TypeError, function() {
  dotAll.call(null);
});

assert.throws(TypeError, function() {
  dotAll.call(true);
});

assert.throws(TypeError, function() {
  dotAll.call('string');
});

assert.throws(TypeError, function() {
  dotAll.call(Symbol('s'));
});

assert.throws(TypeError, function() {
  dotAll.call(4);
});
