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

// "𝐁" is U+1d401 MATHEMATICAL BOLD CAPITAL B
// - Also representable as the code point "\u{1d401}"
// - Also representable as the surrogate pair "\uD835\uDC01"

// Verify assumptions:
assert.sameValue("𝐁".length, 2, 'The length of "𝐁" is 2');
assert.sameValue("\u{1d401}".length, 2, 'The length of "\\u{1d401}" is 2');
assert.sameValue("\uD835\uDC01".length, 2, 'The length of "\\uD835\\uDC01" is 2');
assert.sameValue(1, "𝐁".match(/./)[0].length, 'The length of a single code unit match against "𝐁" is 1 (without /u flag)');
assert.sameValue(1, "\u{1d401}".match(/./)[0].length, 'The length of a single code unit match against "\\u{1d401}" is 1 (without /u flag)');
assert.sameValue(1, "\uD835\uDC01".match(/./)[0].length, 'The length of a single code unit match against "\\ud835\\udc01" is 1 (without /u flag)');

assert.compareArray([0, 1], "𝐁".match(/./).indices[0], 'Indices for non-unicode match against "𝐁" (without /u flag)');
assert.compareArray([0, 1], "\u{1d401}".match(/./).indices[0], 'Indices for non-unicode match against "\\u{1d401}" (without /u flag)');
assert.compareArray([0, 1], "\uD835\uDC01".match(/./).indices[0], 'Indices for non-unicode match against "\\ud835\\udc01" (without /u flag)');
assert.compareArray([0, 1], "𝐁".match(/(?<a>.)/).indices.groups.a, 'Indices for non-unicode match against "𝐁" in groups.a (without /u flag)');
assert.compareArray([0, 1], "\u{1d401}".match(/(?<a>.)/).indices.groups.a, 'Indices for non-unicode match against "\\u{1d401}" in groups.a (without /u flag)');
assert.compareArray([0, 1], "\uD835\uDC01".match(/(?<a>.)/).indices.groups.a, 'Indices for non-unicode match against "\\ud835\\udc01" in groups.a (without /u flag)');