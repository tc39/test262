/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Handle infinite recursion
esid: pending
features: [host-gc-required]
---*/

function eval() { eval(); }

function DoWhile_3()
{
  eval();
}

try
{
  DoWhile_3();
}
catch(e) { }

var r;
function* f()
{
  r = arguments;
  test();
  yield 170;
}

function test()
{
  function foopy()
  {
    try
    {
      for (var i of f());
    }
    catch (e)
    {
      $262.gc();
    }
  }
  foopy();
}
test();
