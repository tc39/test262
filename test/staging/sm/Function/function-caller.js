/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Function.prototype.caller should throw a TypeError for strict-mode functions
esid: pending
---*/

function expectTypeError(fun)
{
  try
  {
    fun();
    throw new Error("didn't throw");
  }
  catch (e)
  {
    assert.sameValue(e instanceof TypeError, true,
             "expected TypeError calling function" +
             ("name" in fun ? " " + fun.name : "") + ", instead got: " + e);
  }
}

function bar() { "use strict"; }
expectTypeError(function barCaller() { bar.caller; });

function baz() { "use strict"; return 17; }
expectTypeError(function bazCaller() { baz.caller; });
