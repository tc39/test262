/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  |for (x => 0 in 1;;) break;| must be a syntax error per ES6, not an elaborate nop
esid: pending
---*/

assert.throws(SyntaxError, function() {
  Function("for (x => 0 in 1;;) break;");
});
