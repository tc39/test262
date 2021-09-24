// Copyright 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Named groups can be used in conjunction with lookbehind
esid: prod-GroupSpecifier
features: [regexp-named-groups, regexp-lookbehind]
includes: [compareArray.js]
---*/

// Unicode mode
assert.compareArray(
  ["f", "c"],
  "abcdef".match(/(?<=(?<a>\w){3})f/u),
  '["f", "c"] must return the same value returned by "abcdef".match(/(?<=(?<a>w){3})f/u)'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w){3})f/u).groups.a,
  "c",
  'The value of "abcdef".match(/(?<=(?<a>w){3})f/u).groups.a is expected to be "c"'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w){4})f/u).groups.a,
  "b",
  'The value of "abcdef".match(/(?<=(?<a>w){4})f/u).groups.a is expected to be "b"'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w)+)f/u).groups.a,
  "a",
  'The value of "abcdef".match(/(?<=(?<a>w)+)f/u).groups.a is expected to be "a"'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w){6})f/u),
  null,
  '"abcdef".match(/(?<=(?<a>w){6})f/u) must return null'
);

assert.compareArray(
  ["f", ""],
  "abcdef".match(/((?<=\w{3}))f/u),
  '["f", ""] must return the same value returned by "abcdef".match(/((?<=w{3}))f/u)'
);
assert.compareArray(
  ["f", ""],
  "abcdef".match(/(?<a>(?<=\w{3}))f/u),
  '["f", ""] must return the same value returned by "abcdef".match(/(?<a>(?<=w{3}))f/u)'
);

assert.compareArray(
  ["f", undefined],
  "abcdef".match(/(?<!(?<a>\d){3})f/u),
  '["f", undefined] must return the same value returned by "abcdef".match(/(?<!(?<a>d){3})f/u)'
);
assert.sameValue(
  "abcdef".match(/(?<!(?<a>\D){3})f/u),
  null,
  '"abcdef".match(/(?<!(?<a>D){3})f/u) must return null'
);

assert.compareArray(
  ["f", undefined],
  "abcdef".match(/(?<!(?<a>\D){3})f|f/u),
  '["f", undefined] must return the same value returned by "abcdef".match(/(?<!(?<a>D){3})f|f/u)'
);
assert.compareArray(
  ["f", undefined],
  "abcdef".match(/(?<a>(?<!\D{3}))f|f/u),
  '["f", undefined] must return the same value returned by "abcdef".match(/(?<a>(?<!D{3}))f|f/u)'
);

// Non-Unicode mode
assert.compareArray(
  ["f", "c"],
  "abcdef".match(/(?<=(?<a>\w){3})f/),
  '["f", "c"] must return the same value returned by "abcdef".match(/(?<=(?<a>w){3})f/)'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w){3})f/).groups.a,
  "c",
  'The value of "abcdef".match(/(?<=(?<a>w){3})f/).groups.a is expected to be "c"'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w){4})f/).groups.a,
  "b",
  'The value of "abcdef".match(/(?<=(?<a>w){4})f/).groups.a is expected to be "b"'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w)+)f/).groups.a,
  "a",
  'The value of "abcdef".match(/(?<=(?<a>w)+)f/).groups.a is expected to be "a"'
);
assert.sameValue(
  "abcdef".match(/(?<=(?<a>\w){6})f/),
  null,
  '"abcdef".match(/(?<=(?<a>w){6})f/) must return null'
);

assert.compareArray(
  ["f", ""],
  "abcdef".match(/((?<=\w{3}))f/),
  '["f", ""] must return the same value returned by "abcdef".match(/((?<=w{3}))f/)'
);
assert.compareArray(
  ["f", ""],
  "abcdef".match(/(?<a>(?<=\w{3}))f/),
  '["f", ""] must return the same value returned by "abcdef".match(/(?<a>(?<=w{3}))f/)'
);

assert.compareArray(
  ["f", undefined],
  "abcdef".match(/(?<!(?<a>\d){3})f/),
  '["f", undefined] must return the same value returned by "abcdef".match(/(?<!(?<a>d){3})f/)'
);
assert.sameValue(
  "abcdef".match(/(?<!(?<a>\D){3})f/),
  null,
  '"abcdef".match(/(?<!(?<a>D){3})f/) must return null'
);

assert.compareArray(
  ["f", undefined],
  "abcdef".match(/(?<!(?<a>\D){3})f|f/),
  '["f", undefined] must return the same value returned by "abcdef".match(/(?<!(?<a>D){3})f|f/)'
);
assert.compareArray(
  ["f", undefined],
  "abcdef".match(/(?<a>(?<!\D{3}))f|f/),
  '["f", undefined] must return the same value returned by "abcdef".match(/(?<a>(?<!D{3}))f|f/)'
);

// Even within a lookbehind, properties are created in left to right order
assert.compareArray(["fst", "snd"], Object.getOwnPropertyNames(
    /(?<=(?<fst>.)|(?<snd>.))/u.exec("abcd").groups), '["fst", "snd"] must return the same value returned by Object.getOwnPropertyNames(\n    /(?<=(?<fst>.)|(?<snd>.))/u.exec("abcd").groups)');
