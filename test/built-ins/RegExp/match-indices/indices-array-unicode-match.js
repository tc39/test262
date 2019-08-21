// Copyright 2019 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Basic matching cases with non-unicode matches.
includes: [compareArray.js, propertyHelper.js]
esid: sec-makeindicesarray
features: [regexp-match-indices]
---*/

assert.compareArray([[1, 2], [1, 2]], "bab".match(/(a)/u).indices, compareArray);
assert.compareArray([[0, 3], [1, 2]], "bab".match(/.(a)./u).indices, compareArray);
assert.compareArray([[0, 3], [1, 2], [2, 3]], "bab".match(/.(a)(.)/u).indices, compareArray);
assert.compareArray([[0, 3], [1, 3]], "bab".match(/.(\w\w)/u).indices, compareArray);
assert.compareArray([[0, 3], [0, 3]], "bab".match(/(\w\w\w)/u).indices, compareArray);
assert.compareArray([[0, 3], [0, 2], [2, 3]], "bab".match(/(\w\w)(\w)/u).indices, compareArray);
assert.compareArray([[0, 2], [0, 2], undefined], "bab".match(/(\w\w)(\W)?/u).indices, compareArray);

let groups = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/u.exec("abccba").indices.groups;
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
assert.sameValue(2, "𝐁".match(/./u)[0].length, 'The length of a single code point match against "𝐁" is 2 (with /u flag)');
assert.sameValue(2, "\u{1d401}".match(/./u)[0].length, 'The length of a single code point match against "\\u{1d401}" is 2 (with /u flag)');
assert.sameValue(2, "\uD835\uDC01".match(/./u)[0].length, 'The length of a single code point match against "\\ud835\\udc01" is 2 (with /u flag)');

assert.compareArray([0, 2], "𝐁".match(/./u).indices[0], 'Indices for unicode match against "𝐁" (with /u flag)');
assert.compareArray([0, 2], "\u{1d401}".match(/./u).indices[0], 'Indices for unicode match against \\u{1d401} (with /u flag)');
assert.compareArray([0, 2], "\uD835\uDC01".match(/./u).indices[0], 'Indices for unicode match against \\ud835\\udc01 (with /u flag)');
assert.compareArray([0, 2], "𝐁".match(/(?<a>.)/u).indices.groups.a, 'Indices for unicode match against 𝐁 in groups.a (with /u flag)');
assert.compareArray([0, 2], "\u{1d401}".match(/(?<a>.)/u).indices.groups.a, 'Indices for unicode match against \\u{1d401} in groups.a (with /u flag)');
assert.compareArray([0, 2], "\uD835\uDC01".match(/(?<a>.)/u).indices.groups.a, 'Indices for unicode match against \\ud835\\udc01 in groups.a (with /u flag)');