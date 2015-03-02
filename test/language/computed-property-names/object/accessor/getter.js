// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    In an object, duplicate computed property getter names produce only a single property of
    that name, whose value is the value of the last property of that name.
---*/
var object = {
  get ['a']() {
    return 'A';
  }
};
assert.sameValue(object.a, 'A');

object = {
  get b() {
    assert(false);
  },
  get ['b']() {
    return 'B';
  }
};
assert.sameValue(object.b, 'B');

object = {
  get c() {
    assert(false);
  },
  get ['c']() {
    assert(false);
  },
  get ['c']() {
    return 'C';
  }
};
assert.sameValue(object.c, 'C');

object = {
  get ['d']() {
    assert(false);
  },
  get d() {
    return 'D';
  }
};
assert.sameValue(object.d, 'D');
