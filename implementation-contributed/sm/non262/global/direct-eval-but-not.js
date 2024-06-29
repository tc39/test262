// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-global-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 609256;
var summary =
  "Don't crash doing a direct eval when eval doesn't resolve to an object " +
  "(let alone the original eval function)";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var eval = "";
try
{
  eval();
  throw new Error("didn't throw?");
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true);
}

/******************************************************************************/

print("All tests passed!");
