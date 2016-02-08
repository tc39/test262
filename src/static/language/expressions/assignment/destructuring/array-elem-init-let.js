// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Value retrieval of Initializer obeys `let` semantics.
es6id: 12.14.5.3
features: [let]
---*/

var x;

assert.throws(ReferenceError, function() {
  [ x = y ] = [];
  let y;
});
