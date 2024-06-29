// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-object-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  uses shell load() function
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var PART = 1, PARTS = 4;

//-----------------------------------------------------------------------------
var BUGNUMBER = 430133;
var summary =
  'ES5 Object.defineProperty(O, P, Attributes): redefinition ' +
  PART + ' of ' + PARTS;

print(BUGNUMBER + ": " + summary);

loadRelativeToScript("defineProperty-setup.js");

/**************
 * BEGIN TEST *
 **************/

try
{
  new TestRunner().runPropertyPresentTestsFraction(PART, PARTS);
}
catch (e)
{
  throw "Error thrown during testing: " + e +
          " at line " + e.lineNumber + "\n" +
        (e.stack
          ? "Stack: " + e.stack.split("\n").slice(2).join("\n") + "\n"
          : "");
}

/******************************************************************************/

print("Tests complete!");
