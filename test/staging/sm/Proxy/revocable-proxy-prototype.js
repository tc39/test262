/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Accessing a revocable proxy's [[Prototype]] shouldn't crash
esid: pending
---*/

function checkFunctionAppliedToRevokedProxy(fun)
{
  var p = Proxy.revocable({}, {});
  p.revoke();

  try
  {
    fun(p.proxy);
    throw "didn't throw";
  }
  catch (e)
  {
    assert.sameValue(e instanceof TypeError, true,
             "expected TypeError, got " + e);
  }
}

checkFunctionAppliedToRevokedProxy(proxy => Object.getPrototypeOf(proxy));
checkFunctionAppliedToRevokedProxy(proxy => Object.setPrototypeOf(proxy, null));
