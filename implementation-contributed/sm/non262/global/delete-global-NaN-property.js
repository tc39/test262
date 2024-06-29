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
"use strict"

//-----------------------------------------------------------------------------
var BUGNUMBER = 649570;
var summary = "|delete window.NaN| should throw a TypeError";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var g = this, v = false;
try
{
  delete this.NaN;
  throw new Error("no exception thrown");
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true,
           "Expected a TypeError, got: " + e);
}

/******************************************************************************/

print("Tests complete");
