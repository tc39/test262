/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  '0x' not followed by hex digits should be a syntax error
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval("0x");
});
