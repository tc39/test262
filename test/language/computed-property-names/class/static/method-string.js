// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    In a class, static computed property method names can be a string
includes: [compareArray.js]
---*/
class C {
  static a() { return 'A'}
  static ['b']() { return 'B'; }
  static c() { return 'C'; }
  static ['d']() { return 'D'; }
}
assert.sameValue(C.a(), 'A');
assert.sameValue(C.b(), 'B');
assert.sameValue(C.c(), 'C');
assert.sameValue(C.d(), 'D');
assert(compareArray(Object.keys(C), []));
assert(compareArray(Object.getOwnPropertyNames(C), ['length', 'name', 'prototype', 'a', 'b', 'c', 'd']));
