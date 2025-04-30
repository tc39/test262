/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Do not assert when ungetting a Unicode char sequence
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval("var a\\0021 = 3;");
});
