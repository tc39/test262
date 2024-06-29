// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-syntax-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 9999999;
var summary =
  "Properly maintain the line number when tokenizing identifiers that " +
  "contain Unicode escapes *and* are terminated by U+2028 LINE SEPARATOR " +
  "or U+2029 PARAGRAPH SEPARATOR";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var code = "var a\u0062c = [];\n"; // line 1

for (var i = 0; i < 100; i++)
  code += "a\\u0062c\u2028a\\u0062c\u2029"; // lines 2..2+200-1

code += "@"; // line 2+200

try
{
  eval(code);
  throw new Error("didn't throw");
}
catch (e)
{
  assert.sameValue(e.lineNumber, 2 + 200);
}

/******************************************************************************/

print("Tests complete");
