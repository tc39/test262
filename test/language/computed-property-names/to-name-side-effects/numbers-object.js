// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    to name side effects numbers
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

var object = {
  a: 'A',
  [key1]: 'B',
  c: 'C',
  [key2]: 'D',
};
assert.sameValue(counter, 2);
assert.sameValue(object.a, 'A');
assert.sameValue(object[1], 'B');
assert.sameValue(object.c, 'C');
assert.sameValue(object[2], 'D');
assert(compareArray(Object.keys(object), ['1', '2', 'a', 'c']));
