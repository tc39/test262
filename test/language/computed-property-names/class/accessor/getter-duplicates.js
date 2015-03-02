// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    In a class, duplicate computed property getter names produce only a single property of
    that name, whose value is the value of the last property of that name.
---*/
class C {
  get ['a']() {
    return 'A';
  }
}
assert.sameValue(new C().a, 'A');

class C2 {
  get b() {
    assert(false);
  }
  get ['b']() {
    return 'B';
  }
}
assert.sameValue(new C2().b, 'B');

class C3 {
  get c() {
    assert(false);
  }
  get ['c']() {
    assert(false);
  }
  get ['c']() {
    return 'C';
  }
}
assert.sameValue(new C3().c, 'C');

class C4 {
  get ['d']() {
    assert(false);
  }
  get d() {
    return 'D';
  }
}
assert.sameValue(new C4().d, 'D');
