// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    In an object, duplicate computed property getter names produce only a single property of
    that name, whose value is the value of the last property of that name.
---*/
var calls = 0;
var object = {
  set ['a'](_) {
    calls++;
  }
};
object.a = 'A';
assert.sameValue(calls, 1);

calls = 0;
object = {
  set b(_) {
    assert(false);
  },
  set ['b'](_) {
    calls++;
  }
};
object.b = 'B';
assert.sameValue(calls, 1);

calls = 0;
object = {
  set c(_) {
    assert(false)
  },
  set ['c'](_) {
    assert(false)
  },
  set ['c'](_) {
    calls++
  }
};
object.c = 'C';
assert.sameValue(calls, 1);

calls = 0;
object = {
  set ['d'](_) {
    assert(false)
  },
  set d(_) {
    calls++
  }
};
object.d = 'D';
assert.sameValue(calls, 1);
