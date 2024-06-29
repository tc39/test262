// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Christian Holler <decoder@own-hero.net>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 622167;
var summary = 'Handle infinite recursion';
print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

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
      gc();
    }
  }
  foopy();
}
test();

/******************************************************************************/

print("All tests passed!");
