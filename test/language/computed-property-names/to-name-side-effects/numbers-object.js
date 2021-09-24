// Copyright (C) 2014 the V8 project authors. All rights reserved.
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
    assert.sameValue(counter++, 0, 'The result of counter++ is expected to be 0');
    return 1;
  },
  toString: null
};
var key2 = {
  valueOf: function() {
    assert.sameValue(counter++, 1, 'The result of counter++ is expected to be 1');
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
assert.sameValue(counter, 2, 'The value of counter is expected to be 2');
assert.sameValue(object.a, 'A', 'The value of object.a is expected to be "A"');
assert.sameValue(object[1], 'B', 'The value of object[1] is expected to be "B"');
assert.sameValue(object.c, 'C', 'The value of object.c is expected to be "C"');
assert.sameValue(object[2], 'D', 'The value of object[2] is expected to be "D"');
assert.compareArray(
  Object.getOwnPropertyNames(object), ['1', '2', 'a', 'c'],
  'Object.getOwnPropertyNames({a: "A", [key1]: "B", c: "C", [key2]: "D",}) must return ["1", "2", "a", "c"]'
);
