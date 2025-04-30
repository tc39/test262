/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Don't crash doing a direct eval when eval doesn't resolve to an object (let alone the original eval function)
esid: pending
---*/

var eval = "";
try
{
  eval();
  throw new Error("didn't throw?");
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true);
}
