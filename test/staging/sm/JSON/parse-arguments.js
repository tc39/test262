/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  JSON.parse handling of omitted arguments
esid: pending
---*/

try
{
  var r = JSON.parse();
  throw new Error("didn't throw, returned " + r);
}
catch (e)
{
  assert.sameValue(e instanceof SyntaxError, true, "expected syntax error, got: " + e);
}
