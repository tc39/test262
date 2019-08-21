// Copyright 2019 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Basic matching cases with non-unicode matches.
includes: [compareArray.js, propertyHelper.js]
esid: sec-makeindicesarray
features: [regexp-match-indices]
---*/

assert.compareArray([[1, 2], [1, 2]], "bab".match(/(a)/).indices, compareArray);
assert.compareArray([[0, 3], [1, 2]], "bab".match(/.(a)./).indices, compareArray);
assert.compareArray([[0, 3], [1, 2], [2, 3]], "bab".match(/.(a)(.)/).indices, compareArray);
assert.compareArray([[0, 3], [1, 3]], "bab".match(/.(\w\w)/).indices, compareArray);
assert.compareArray([[0, 3], [0, 3]], "bab".match(/(\w\w\w)/).indices, compareArray);
assert.compareArray([[0, 3], [0, 2], [2, 3]], "bab".match(/(\w\w)(\w)/).indices, compareArray);
assert.compareArray([[0, 2], [0, 2], undefined], "bab".match(/(\w\w)(\W)?/).indices, compareArray);

let groups = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/.exec("abccba").indices.groups;
assert.hasOwnDataProperty(groups, "a", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: [0, 1]
}, { equaler: compareArray });
assert.hasOwnDataProperty(groups, "b", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: [1, 2]
}, { equaler: compareArray });
assert.hasOwnDataProperty(groups, "c", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: [2, 3]
}, { equaler: compareArray });
