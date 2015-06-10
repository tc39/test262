// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: Invoked with a value that cannot be converted to an object
info: >
    1. Let to be ToObject(target).
    2. ReturnIfAbrupt(to).
---*/

assert.throws(TypeError, function() {
  Object.assign();
});

assert.throws(TypeError, function() {
  Object.assign(undefined);
});

assert.throws(TypeError, function() {
  Object.assign(null);
});
