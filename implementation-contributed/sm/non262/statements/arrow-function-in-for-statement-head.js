// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-statements-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var gTestfile = "arrow-function-in-for-statement-head.js";
var BUGNUMBER = 1163851;
var summary =
  "|for (x => 0 in 1;;) break;| must be a syntax error per ES6, not an " +
  "elaborate nop";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

try
{
  Function("for (x => 0 in 1;;) break;");
  throw new Error("didn't throw");
}
catch (e)
{
  assert.sameValue(e instanceof SyntaxError, true,
           "expected syntax error, got " + e);
}

/******************************************************************************/

print("Tests complete");
