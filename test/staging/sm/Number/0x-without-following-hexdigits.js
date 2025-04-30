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

try
{
  eval("0x");
  throw new Error("didn't throw parsing 0x (with no subsequent hex digits)");
}
catch (e)
{
  assert.sameValue(e instanceof SyntaxError, true,
           "bad exception thrown: " + e);
}
