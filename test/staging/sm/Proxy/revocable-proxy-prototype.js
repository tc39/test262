/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
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

  assert.throws(TypeError, function() {
    fun(p.proxy);
  });
}

checkFunctionAppliedToRevokedProxy(proxy => Object.getPrototypeOf(proxy));
checkFunctionAppliedToRevokedProxy(proxy => Object.setPrototypeOf(proxy, null));
