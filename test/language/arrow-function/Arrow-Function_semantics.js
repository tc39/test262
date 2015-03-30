// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    Semantics associated with specific Arrow Function syntactic forms.
includes: [compareArray.js]
---*/

// Empty arrow function returns undefined
var empty = () => {};
assert.sameValue(empty(), undefined);

// Single parameter case needs no parentheses around parameter list
var identity = x => x;
assert.sameValue(identity(empty), empty);

// No need for parentheses even for lower-precedence expression body
var square = x => x * x;
assert.sameValue(square(3), 9);

// Parenthesize the body to return an object literal expression
var key_maker = val => ({key: val});
assert.sameValue(key_maker(empty).key, empty);

// Expression Body implicit return
var evens = [0, 2, 4, 6, 8];
assert(compareArray(evens.map(v => v + 1), [1, 3, 5, 7, 9]));

// Statement body needs braces, must use 'return' explicitly if not void
var fives = [];
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(v => {
  if (v % 5 === 0) fives.push(v);
});
assert(compareArray(fives, [5, 10]));
