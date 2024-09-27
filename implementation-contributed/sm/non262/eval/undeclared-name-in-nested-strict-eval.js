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
"use strict";

//-----------------------------------------------------------------------------
var BUGNUMBER = 514568;
var summary =
  "Verify that we don't optimize free names to gnames in eval code that's " +
  "global, when the name refers to a binding introduced by a strict mode " +
  "eval frame";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var x = "global";
assert.sameValue(eval('var x = "eval"; eval("x")'), "eval");

/******************************************************************************/

print("Tests complete!");
