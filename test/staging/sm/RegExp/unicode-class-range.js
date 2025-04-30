// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- disallow range with CharacterClassEscape.";

print(BUGNUMBER + ": " + summary);

assert.throws(SyntaxError, () => eval(`/[\\w-\\uFFFF]/u`));
assert.throws(SyntaxError, () => eval(`/[\\W-\\uFFFF]/u`));
assert.throws(SyntaxError, () => eval(`/[\\d-\\uFFFF]/u`));
assert.throws(SyntaxError, () => eval(`/[\\D-\\uFFFF]/u`));
assert.throws(SyntaxError, () => eval(`/[\\s-\\uFFFF]/u`));
assert.throws(SyntaxError, () => eval(`/[\\S-\\uFFFF]/u`));

assert.throws(SyntaxError, () => eval(`/[\\uFFFF-\\w]/u`));
assert.throws(SyntaxError, () => eval(`/[\\uFFFF-\\W]/u`));
assert.throws(SyntaxError, () => eval(`/[\\uFFFF-\\d]/u`));
assert.throws(SyntaxError, () => eval(`/[\\uFFFF-\\D]/u`));
assert.throws(SyntaxError, () => eval(`/[\\uFFFF-\\s]/u`));
assert.throws(SyntaxError, () => eval(`/[\\uFFFF-\\S]/u`));

assert.throws(SyntaxError, () => eval(`/[\\w-\\w]/u`));
assert.throws(SyntaxError, () => eval(`/[\\W-\\W]/u`));
assert.throws(SyntaxError, () => eval(`/[\\d-\\d]/u`));
assert.throws(SyntaxError, () => eval(`/[\\D-\\D]/u`));
assert.throws(SyntaxError, () => eval(`/[\\s-\\s]/u`));
assert.throws(SyntaxError, () => eval(`/[\\S-\\S]/u`));

