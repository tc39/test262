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
var BUGNUMBER = 604504;
var summary = "eval called from a native function is indirect";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var originalEval = eval;

var global = this;
var directCheckCode = "this === global";

function testBound()
{
  var global = "psych!";
  var eval = originalEval.bind(undefined, directCheckCode);
  assert.sameValue(eval(), true);
}
testBound();

/******************************************************************************/

print("All tests passed!");
