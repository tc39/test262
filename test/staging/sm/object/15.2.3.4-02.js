/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [compareArray.js]
flags:
  - noStrict
description: |
  Object.getOwnPropertyNames: array objects
esid: pending
---*/

var a, names, expected;

a = [0, 1, 2];

names = Object.getOwnPropertyNames(a).sort();
expected = ["0", "1", "2", "length"].sort();
assert.compareArray(names, expected);


a = [1, , , 7];
a.p = 2;
Object.defineProperty(a, "q", { value: 42, enumerable: false });

names = Object.getOwnPropertyNames(a).sort();
expected = ["0", "3", "p", "q", "length"].sort();
assert.compareArray(names, expected);


a = [];

names = Object.getOwnPropertyNames(a).sort();
expected = ["length"];
assert.compareArray(names, expected);
