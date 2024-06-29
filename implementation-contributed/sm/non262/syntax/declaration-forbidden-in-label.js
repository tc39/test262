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
var BUGNUMBER = 1288459;
var summary =
  "Properly implement the spec's distinctions between StatementListItem and " +
  "Statement grammar productions and their uses";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assertThrowsInstanceOf(() => Function("a: let x;"), SyntaxError);
assertThrowsInstanceOf(() => Function("b: const y = 3;"), SyntaxError);
assertThrowsInstanceOf(() => Function("c: class z {};"), SyntaxError);

assertThrowsInstanceOf(() => Function("'use strict'; d: function w() {};"), SyntaxError);

// Annex B.3.2 allows this in non-strict mode code.
Function("e: function x() {};");

assertThrowsInstanceOf(() => Function("f: function* y() {}"), SyntaxError);

/******************************************************************************/

print("Tests complete");
