// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    In a class, static computed property method names can be a number
includes: [compareArray.js]
---*/
class C {
  static a() { return 'A'; }
  static [1]() { return 'B'; }
  static c() { return 'C'; }
  static [2]() { return 'D'; }
}
assert.sameValue(C.a(), 'A');
assert.sameValue(C[1](), 'B');
assert.sameValue(C.c(), 'C');
assert.sameValue(C[2](), 'D');
assert(compareArray(Object.keys(C), []));
assert(compareArray(Object.getOwnPropertyNames(C), ['1', '2', 'length', 'name', 'prototype', 'a', 'c']));
