/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Don't assert parsing |for (var x = 3 of 42);|
esid: pending
---*/

try
{
  Function("for (var x = 3 of 42);");
  throw new Error("didn't throw");
}
catch (e)
{
  assert.sameValue(e instanceof SyntaxError, true,
           "expected syntax error, got: " + e);
}
