// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Promise.anySettled` invoked on a non-object value
esid: sec-promise-anysettled
info: |
    1. Let C be the this value.
    2. If Type(C) is not Object, throw a TypeError exception.
features: [Symbol, Promise.anySettled]
---*/

assert.throws(TypeError, function() {
  Promise.anySettled.call(undefined, []);
});

assert.throws(TypeError, function() {
  Promise.anySettled.call(null, []);
});

assert.throws(TypeError, function() {
  Promise.anySettled.call(86, []);
});

assert.throws(TypeError, function() {
  Promise.anySettled.call('string', []);
});

assert.throws(TypeError, function() {
  Promise.anySettled.call(true, []);
});

assert.throws(TypeError, function() {
  Promise.anySettled.call(Symbol(), []);
});
