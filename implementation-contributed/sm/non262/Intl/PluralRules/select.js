// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-PluralRules-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// Tests the format function with a diverse set of locales and options.

var pr;

pr = new Intl.PluralRules("en-us");
assert.sameValue(pr.select(0), "other");
assert.sameValue(pr.select(0.5), "other");
assert.sameValue(pr.select(1.2), "other");
assert.sameValue(pr.select(1.5), "other");
assert.sameValue(pr.select(1.7), "other");
assert.sameValue(pr.select(-1), "one");
assert.sameValue(pr.select(1), "one");
assert.sameValue(pr.select("1"), "one");
assert.sameValue(pr.select(123456789.123456789), "other");

pr = new Intl.PluralRules("de", {type: "cardinal"});
assert.sameValue(pr.select(0), "other");
assert.sameValue(pr.select(0.5), "other");
assert.sameValue(pr.select(1.2), "other");
assert.sameValue(pr.select(1.5), "other");
assert.sameValue(pr.select(1.7), "other");
assert.sameValue(pr.select(-1), "one");

pr = new Intl.PluralRules("de", {type: "ordinal"});
assert.sameValue(pr.select(0), "other");
assert.sameValue(pr.select(0.5), "other");
assert.sameValue(pr.select(1.2), "other");
assert.sameValue(pr.select(1.5), "other");
assert.sameValue(pr.select(1.7), "other");
assert.sameValue(pr.select(-1), "other");

pr = new Intl.PluralRules("pl", {type: "cardinal"});
assert.sameValue(pr.select(0), "many");
assert.sameValue(pr.select(0.5), "other");
assert.sameValue(pr.select(1), "one");

pr = new Intl.PluralRules("pl", {type: "cardinal", maximumFractionDigits: 0});
assert.sameValue(pr.select(1.1), "one");

pr = new Intl.PluralRules("pl", {type: "cardinal", maximumFractionDigits: 1});
assert.sameValue(pr.select(1.1), "other");

pr = new Intl.PluralRules("en", {type: "cardinal", minimumFractionDigits: 0});
assert.sameValue(pr.select(1), "one");

pr = new Intl.PluralRules("en", {type: "cardinal", minimumFractionDigits: 2});
assert.sameValue(pr.select(1), "other");

var weirdCases = [
  NaN,
  Infinity,
  "word",
  [0,2],
  {},
];

for (let c of weirdCases) {
  assert.sameValue(pr.select(c), "other");
};

