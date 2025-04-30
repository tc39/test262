/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Object.freeze([]).pop() must throw a TypeError
esid: pending
---*/

try
{
  Object.freeze([]).pop();
  throw new Error("didn't throw");
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true,
           "should have thrown TypeError, instead got: " + e);
}
