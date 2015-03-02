// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    duplicate computed property names produce only a single property of
    that name, whose value is the value of the last property of that name.
---*/
var object = {
  a: 1,
  ['a']: 2,
};
assert.sameValue(object.a, 2);
