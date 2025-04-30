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
assert.throws(SyntaxError, () => eval("() \n => {}"));
assert.throws(SyntaxError, () => eval("a \n => {}"));
assert.throws(SyntaxError, () => eval("(a) /*\n*/ => {}"));
assert.throws(SyntaxError, () => eval("(a, b) \n => {}"));
assert.throws(SyntaxError, () => eval("(a, b = 1) \n => {}"));
assert.throws(SyntaxError, () => eval("(a, ...b) \n => {}"));
assert.throws(SyntaxError, () => eval("(a, b = 1, ...c) \n => {}"));

