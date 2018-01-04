// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    if the argument is a Symbol or Object null, it throws exception
---*/

var a = [];
var depthNum = Symbol();

assert.throws(TypeError, function() {
  a.flatten(depthNum);
}, 'symbol value');

depthNum = Object.create(null);

assert.throws(TypeError, function() {
  a.flatten(depthNum);
}, 'object create null');

