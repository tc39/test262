// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property names can be a symbol
includes: [compareArray.js]
features: [Symbol]
---*/

function ID(x) {
  return x;
}

var sym1 = Symbol();
var sym2 = Symbol();
var object = {
  a: 'A',
  [sym1]: 'B',
  c: 'C',
  [ID(sym2)]: 'D',
};
assert.sameValue(object.a, 'A', 'The value of object.a is expected to be "A"');
assert.sameValue(object[sym1], 'B', 'The value of object[sym1] is expected to be "B"');
assert.sameValue(object.c, 'C', 'The value of object.c is expected to be "C"');
assert.sameValue(object[sym2], 'D', 'The value of object[sym2] is expected to be "D"');
assert.compareArray(
  Object.getOwnPropertyNames(object), ['a', 'c'],
  'Object.getOwnPropertyNames({a: "A", [sym1]: "B", c: "C", [ID(sym2)]: "D",}) must return ["a", "c"]'
);
assert.compareArray(
  Object.getOwnPropertySymbols(object), [sym1, sym2],
  'Object.getOwnPropertySymbols({a: "A", [sym1]: "B", c: "C", [ID(sym2)]: "D",}) must return [sym1, sym2]'
);
