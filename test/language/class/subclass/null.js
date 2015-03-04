// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    class subclassing null
---*/
var N = null;

class Foo extends N {
  constructor(x, y) {
    assert.sameValue(x, 1, "The value of `x` is `1`");
    assert.sameValue(y, 2, "The value of `y` is `2`");
    return {};
  }
}

new Foo(1,2);