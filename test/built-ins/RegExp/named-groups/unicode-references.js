// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Named backreferences in Unicode RegExps
esid: sec-atomescape
info: |
  The production AtomEscape :: [+N] k GroupName evaluates as follows:

    1. Search the enclosing RegExp for an instance of a GroupSpecifier for an
       RegExpIdentifierName which has a StringValue equal to the StringValue
       of the RegExpIdentifierName contained in GroupName.
    2. Assert: A unique such GroupSpecifier is found.
    3. Let parenIndex be the number of left capturing parentheses in the entire
       regular expression that occur to the left of the located GroupSpecifier.
       This is the total number of times the Atom::(GroupSpecifierDisjunction)
       production is expanded prior to that production's Term plus the total
       number of Atom :: (GroupSpecifierDisjunction) productions enclosing this Term.
    4. Call BackreferenceMatcher(parenIndex) and return its Matcher result.
features: [regexp-named-groups]
includes: [compareArray.js]
---*/

// Named references.
assert.compareArray(
  "bab".match(/(?<b>.).\k<b>/u),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return ["bab", "b"]'
);
assert.sameValue(
  "baa".match(/(?<b>.).\k<b>/u),
  null,
  '"baa".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return null'
);

// Reference inside group.
assert.compareArray(
  "bab".match(/(?<a>\k<a>\w)../u),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return ["bab", "b"]'
);
assert.sameValue(
  "bab".match(/(?<a>\k<a>\w)../u).groups.a,
  "b",
  'The value of "bab".match(/(?<a>k<a>w)../u).groups.a is expected to be "b"'
);

// Reference before group.
assert.compareArray(
  "bab".match(/\k<a>(?<a>b)\w\k<a>/u),
  ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return ["bab", "b"]'
);
assert.sameValue(
  "bab".match(/\k<a>(?<a>b)\w\k<a>/u).groups.a,
  "b",
  'The value of "bab".match(/k<a>(?<a>b)wk<a>/u).groups.a is expected to be "b"'
);
assert.compareArray(
  "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/u),
  ["bab", "b", "a"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return ["bab", "b", "a"]'
);

let {a, b} = "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/u).groups;
assert.sameValue(a, "a", 'The value of a is expected to be "a"');
assert.sameValue(b, "b", 'The value of b is expected to be "b"');

assert.compareArray(
   "bab".match(/\k<a>(?<a>b)\w\k<a>/),
   ["bab", "b"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return ["bab", "b"]'
);
assert.compareArray(
   "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/),
   ["bab", "b", "a"],
  '"bab".match(""bab".match(/(?<b>b)k<a>(?<a>a)k<b>/u).groups") must return ["bab", "b", "a"]'
);

// Reference properties.
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>/u.exec("aba").groups.a,
  "a",
  'The value of /(?<a>a)(?<b>b)k<a>/u.exec("aba").groups.a is expected to be "a"'
);
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>/u.exec("aba").groups.b,
  "b",
  'The value of /(?<a>a)(?<b>b)k<a>/u.exec("aba").groups.b is expected to be "b"'
);
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>/u.exec("aba").groups.c,
  undefined,
  'The value of /(?<a>a)(?<b>b)k<a>/u.exec("aba").groups.c is expected to equal undefined'
);
assert.sameValue(
  /(?<a>a)(?<b>b)\k<a>|(?<c>c)/u.exec("aba").groups.c,
  undefined,
  'The value of /(?<a>a)(?<b>b)k<a>|(?<c>c)/u.exec("aba").groups.c is expected to equal undefined'
);
