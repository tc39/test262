// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    to name, accessor side effects object literal
includes: [compareArray.js]
---*/
var counter = 0;
var key1 = {
  toString: function() {
    assert.sameValue(counter++, 0);
    return 'b';
  }
};
var key2 = {
  toString: function() {
    assert.sameValue(counter++, 1);
    return 'd';
  }
};
var object = {
  a() { return 'A'; },
  [key1]() { return 'B'; },
  c() { return 'C'; },
  [key2]() { return 'D'; },
};
assert.sameValue(counter, 2);
assert.sameValue(object.a(), 'A');
assert.sameValue(object.b(), 'B');
assert.sameValue(object.c(), 'C');
assert.sameValue(object.d(), 'D');
assert(compareArray(Object.keys(object), ['a', 'b', 'c', 'd']));
