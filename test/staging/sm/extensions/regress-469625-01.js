/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Array prototype and expression closures
esid: pending
---*/

var actual = '';
var expect = '';

//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  expect = 'TypeError: [].__proto__ is not a function';

  Array.prototype.__proto__ = function () { return 3; };

  try
  {
    [].__proto__();
  }
  catch(ex)
  {
    actual = ex + '';
  }

  assert.sameValue(expect, actual);
}
