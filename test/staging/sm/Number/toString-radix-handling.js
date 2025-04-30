/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Number.prototype.toString should use ToInteger on the radix and should throw a RangeError if the radix is bad
esid: pending
---*/

function test(r)
{
  try
  {
    5..toString(r);
    throw "should have thrown";
  }
  catch (e)
  {
    assert.sameValue(e instanceof RangeError, true, "expected a RangeError, got " + e);
  }
}
test(Math.pow(2, 32) + 10);
test(55);
