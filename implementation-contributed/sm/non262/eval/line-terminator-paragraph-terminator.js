// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-eval-shell.js
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
var BUGNUMBER = 657367;
var summary =
  "eval via the JSON parser should parse strings containing U+2028/U+2029 " +
  "(as of <https://tc39.github.io/proposal-json-superset/>, that is)";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(eval('("\u2028")'), "\u2028");
assert.sameValue(eval('("\u2029")'), "\u2029");

/******************************************************************************/

print("Tests complete!");
