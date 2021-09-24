// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Basic matching cases with Unicode groups
esid: prod-GroupSpecifier
features: [regexp-named-groups]
includes: [compareArray.js]
---*/

assert.compareArray(
  "bab".match(/(?<a>a)/u),
  ["a", "a"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/(?<a42>a)/u),
  ["a", "a"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/(?<_>a)/u),
  ["a", "a"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/(?<$>a)/u),
  ["a", "a"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["a", "a"]'
);
assert.compareArray(
  "bab".match(/.(?<$>a)./u),
  ["bab", "a"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["bab", "a"]'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(.)/u),
  ["bab", "a", "b"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["bab", "a", "b"]'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(?<b>.)/u),
  ["bab", "a", "b"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["bab", "a", "b"]'
);
assert.compareArray(
  "bab".match(/.(?<a>\w\w)/u),
  ["bab", "ab"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["bab", "ab"]'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w\w)/u),
  ["bab", "bab"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["bab", "bab"]'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w)(?<b>\w)/u),
  ["bab", "ba", "b"],
  '"bab".match(""bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups") must return ["bab", "ba", "b"]'
);

let {a, b, c} = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/u.exec("abccba").groups;
assert.sameValue(a, "a", 'The value of a is expected to be "a"');
assert.sameValue(b, "b", 'The value of b is expected to be "b"');
assert.sameValue(c, "c", 'The value of c is expected to be "c"');

assert.compareArray(
  "bab".match(/(?<a>a)/u),
  "bab".match(/(a)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/u)'
);
assert.compareArray(
  "bab".match(/(?<a42>a)/u),
  "bab".match(/(a)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/u)'
);
assert.compareArray(
  "bab".match(/(?<_>a)/u),
  "bab".match(/(a)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/u)'
);
assert.compareArray(
  "bab".match(/(?<$>a)/u),
  "bab".match(/(a)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/(a)/u)'
);
assert.compareArray(
  "bab".match(/.(?<$>a)./u),
  "bab".match(/.(a)./u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/.(a)./u)'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(.)/u),
  "bab".match(/.(a)(.)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/.(a)(.)/u)'
);
assert.compareArray(
  "bab".match(/.(?<a>a)(?<b>.)/u),
  "bab".match(/.(a)(.)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/.(a)(.)/u)'
);
assert.compareArray(
  "bab".match(/.(?<a>\w\w)/u),
  "bab".match(/.(\w\w)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/.(ww)/u)'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w\w)/u),
  "bab".match(/(\w\w\w)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/(www)/u)'
);
assert.compareArray(
  "bab".match(/(?<a>\w\w)(?<b>\w)/u),
  "bab".match(/(\w\w)(\w)/u),
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return the same value returned by "bab".match(/(ww)(w)/u)'
);

assert.compareArray(
  "bab".match(/(?<b>b).\1/u),
  ["bab", "b"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return ["bab", "b"]'
);
assert.compareArray(
  "baba".match(/(.)(?<a>a)\1\2/u),
  ["baba", "b", "a"],
  '"baba".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return ["baba", "b", "a"]'
);
assert.compareArray(
  "baba".match(/(.)(?<a>a)(?<b>\1)(\2)/u),
  ["baba", "b", "a", "b", "a"],
  '"baba".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return ["baba", "b", "a", "b", "a"]'
);
assert.compareArray(
  "<a".match(/(?<lt><)a/u),
  ["<a", "<"],
  '"<a".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return ["<a", "<"]'
);
assert.compareArray(
  ">a".match(/(?<gt>>)a/u),
  [">a", ">"],
  '">a".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return [">a", ">"]'
);

// Nested groups.
assert.compareArray(
  "bab".match(/(?<a>.(?<b>.(?<c>.)))/u),
  ["bab", "bab", "ab", "b"],
  '"bab".match("/(?<a>.)(?<b>.)(?<c>.)k<c>k<b>k<a>/u.exec("abccba").groups") must return ["bab", "bab", "ab", "b"]'
);

{
    let {a, b, c} = "bab".match(/(?<a>.(?<b>.(?<c>.)))/u).groups
    assert.sameValue(a, "bab", 'The value of a is expected to be "bab"');
    assert.sameValue(b, "ab", 'The value of b is expected to be "ab"');
    assert.sameValue(c, "b", 'The value of c is expected to be "b"');
}
