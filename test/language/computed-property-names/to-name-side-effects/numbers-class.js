// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    to name, accessor side effects numbers 2
includes: [compareArray.js]
---*/
var counter = 0;
var key1 = {
  valueOf: function() {
    assert.sameValue(counter++, 0);
    return 1;
  },
  toString: null
};
var key2 = {
  valueOf: function() {
    assert.sameValue(counter++, 1);
    return 2;
  },
  toString: null
};

class C {
  a() { return 'A'; }
  [key1]() { return 'B'; }
  c() { return 'C'; }
  [key2]() { return 'D'; }
}
assert.sameValue(counter, 2);
assert.sameValue(new C().a(), 'A');
assert.sameValue(new C()[1](), 'B');
assert.sameValue(new C().c(), 'C');
assert.sameValue(new C()[2](), 'D');
assert(compareArray(Object.keys(C.prototype), []));
assert(compareArray(Object.getOwnPropertyNames(C.prototype), ['1', '2', 'constructor', 'a', 'c']));
