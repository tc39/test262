// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Named backreferences in non-Unicode RegExps
esid: prod-GroupSpecifier
features: [regexp-named-groups]
includes: [compareArray.js]
---*/

// Named references.
assert.compareArray(
  "bab".match(/(?<b>.).\k<b>/),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return ["bab", "b"]'
);
assert.sameValue(
  "baa".match(/(?<b>.).\k<b>/),
  null,
  '"baa".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return null'
);

// Reference inside group.
assert.compareArray(
  "bab".match(/(?<a>\k<a>\w)../),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return ["bab", "b"]'
);
assert.sameValue(
  "bab".match(/(?<a>\k<a>\w)../).groups.a,
  "b",
  'The value of "bab".match(/(?<a>k<a>w)../).groups.a is expected to be "b"'
);

// Reference before group.
assert.compareArray(
  "bab".match(/\k<a>(?<a>b)\w\k<a>/),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return ["bab", "b"]'
);
assert.sameValue(
  "bab".match(/\k<a>(?<a>b)\w\k<a>/).groups.a,
  "b",
  'The value of "bab".match(/k<a>(?<a>b)wk<a>/).groups.a is expected to be "b"'
);
assert.compareArray(
  "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/),
  ["bab", "b", "a"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return ["bab", "b", "a"]'
);
let {a, b} = "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/).groups;
assert.sameValue(a, "a", 'The value of a is expected to be "a"');
assert.sameValue(b, "b", 'The value of b is expected to be "b"');

assert.compareArray(
  "bab".match(/\k<a>(?<a>b)\w\k<a>/),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return ["bab", "b"]'
);
assert.compareArray(
  "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/),
  ["bab", "b", "a"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/).groups") must return ["bab", "b", "a"]'
);

// Reference properties.
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>/.exec("aba").groups.a,
  "a",
  'The value of /(?<a>a)(?<b>b)k<a>/.exec("aba").groups.a is expected to be "a"'
);
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>/.exec("aba").groups.b,
  "b",
  'The value of /(?<a>a)(?<b>b)k<a>/.exec("aba").groups.b is expected to be "b"'
);
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>/.exec("aba").groups.c,
  undefined,
  'The value of /(?<a>a)(?<b>b)k<a>/.exec("aba").groups.c is expected to equal undefined'
);
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>|(?<c>c)/.exec("aba").groups.c,
  undefined,
  'The value of /(?<a>a)(?<b>b)k<a>|(?<c>c)/.exec("aba").groups.c is expected to equal undefined'
);
