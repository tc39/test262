// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Basic matching cases with non-Unicode groups
esid: prod-GroupSpecifier
features: [regexp-named-groups]
includes: [compareArray.js]
---*/

assert.compareArray(
  "bab".match(/(?<a>a)/),
  ["a", "a"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/(?<a42>a)/),
  ["a", "a"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/(?<_>a)/),
  ["a", "a"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/(?<$>a)/),
  ["a", "a"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/.(?<$>a)./),
  ["bab", "a"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "a"]'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(.)/),
  ["bab", "a", "b"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "a", "b"]'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(?<b>.)/),
  ["bab", "a", "b"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "a", "b"]'
);
assert.compareArray(
  "bab".match(/.(?<a>\w\w)/),
  ["bab", "ab"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "ab"]'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w\w)/),
  ["bab", "bab"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "bab"]'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w)(?<b>\w)/),
  ["bab", "ba", "b"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "ba", "b"]'
);

let {a, b, c} = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/.exec("abccba").groups;
assert.sameValue(a, "a", 'The value of a is expected to be "a"');
assert.sameValue(b, "b", 'The value of b is expected to be "b"');
assert.sameValue(c, "c", 'The value of c is expected to be "c"');

assert.compareArray(
  "bab".match(/(?<a>a)/),
  "bab".match(/(a)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/)'
);
assert.compareArray(
  "bab".match(/(?<a42>a)/),
  "bab".match(/(a)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/)'
);
assert.compareArray(
  "bab".match(/(?<_>a)/),
  "bab".match(/(a)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/)'
);
assert.compareArray(
  "bab".match(/(?<$>a)/),
  "bab".match(/(a)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/)'
);
assert.compareArray(
  "bab".match(/.(?<$>a)./),
  "bab".match(/.(a)./),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/.(a)./)'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(.)/),
  "bab".match(/.(a)(.)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/.(a)(.)/)'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(?<b>.)/),
  "bab".match(/.(a)(.)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/.(a)(.)/)'
);
assert.compareArray(
  "bab".match(/.(?<a>\w\w)/),
  "bab".match(/.(\w\w)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/.(ww)/)'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w\w)/),
  "bab".match(/(\w\w\w)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/(www)/)'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w)(?<b>\w)/),
  "bab".match(/(\w\w)(\w)/),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return the same value returned by "bab".match(/(ww)(w)/)'
);

assert.compareArray(
  "bab".match(/(?<b>b).\1/),
  ["bab", "b"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["bab", "b"]'
);
assert.compareArray(
  "baba".match(/(.)(?<a>a)\1\2/),
  ["baba", "b", "a"],
  '"baba".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["baba", "b", "a"]'
);
assert.compareArray(
  "baba".match(/(.)(?<a>a)(?<b>\1)(\2)/),
  ["baba", "b", "a", "b", "a"],
  '"baba".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["baba", "b", "a", "b", "a"]'
);
assert.compareArray(
  "<a".match(/(?<lt><)a/),
  ["<a", "<"],
  '"<a".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return ["<a", "<"]'
);
assert.compareArray(
  ">a".match(/(?<gt>>)a/),
  [">a", ">"],
  '">a".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/.exec("abccba").groups") must return [">a", ">"]'
);
