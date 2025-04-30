/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Valgrind errors in jsemit.cpp
esid: pending
---*/

test();

function test()
{
  try
  {
    eval('function(){if(t)');
  }
  catch(ex)
  {
    assert.sameValue(ex instanceof SyntaxError, true, "wrong error: " + ex);
  }

}
