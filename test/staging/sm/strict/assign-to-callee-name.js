/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-strict-shell.js]
flags:
  - noStrict
description: |
  Assigning to a function expression's name within that function should throw a TypeError in strict mode code
esid: pending
---*/

var f = function assignSelfStrict() { "use strict"; assignSelfStrict = 12; };

try
{
  var r = f();
  throw new Error("should have thrown a TypeError, returned " + r);
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true,
           "didn't throw a TypeError: " + e);
}

var assignSelf = 42;
var f2 = function assignSelf() { assignSelf = 12; };

f2(); // shouldn't throw, does nothing
assert.sameValue(assignSelf, 42);
