/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Declarations in for-in loop heads must not contain |in|-expression initializers
esid: pending
---*/

assert.throws(SyntaxError, () => Function("for (var x = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (var x, y = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (var x = 5, y = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (const x = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (const x = 5, y = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (let x = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (let x, y = 3 in {}; ; ) break;"));
assert.throws(SyntaxError, () => Function("for (let x = 2, y = 3 in {}; ; ) break;"));
