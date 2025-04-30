/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  |for (x => 0 in 1;;) break;| must be a syntax error per ES6, not an elaborate nop
esid: pending
---*/

try
{
  Function("for (x => 0 in 1;;) break;");
  throw new Error("didn't throw");
}
catch (e)
{
  assert.sameValue(e instanceof SyntaxError, true,
           "expected syntax error, got " + e);
}
