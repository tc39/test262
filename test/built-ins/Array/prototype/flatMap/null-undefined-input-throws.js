// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatMap
description: >
    null or undefined should throw TypeError Exception
---*/

assert.throws(TypeError, function() {
  [].flatMap.call(null);
}, 'null value');

assert.throws(TypeError, function() {
  [].flatMap.call();
}, 'missing');

assert.throws(TypeError, function() {
  [].flatMap.call(void 0);
}, 'undefined');

