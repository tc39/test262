/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  |new| on a cross-compartment wrapper to a non-constructor shouldn't assert
esid: pending
---*/

var g = $262.createRealm().global;

var otherStr = new g.String("foo");
assert.sameValue(otherStr instanceof g.String, true);
assert.sameValue(otherStr.valueOf(), "foo");

try
{
  var constructor = g.parseInt;
  new constructor();
  throw new Error("no error thrown");
}
catch (e)
{
  // NOTE: not |g.TypeError|, because |new| itself throws because
  //       |!IsConstructor(constructor)|.
  assert.sameValue(e instanceof TypeError, true);
}
