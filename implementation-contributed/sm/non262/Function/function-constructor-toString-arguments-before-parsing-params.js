// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Function-shell.js
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
var BUGNUMBER = 920479;
var summary =
  "Convert all arguments passed to Function() to string before doing any " +
  "parsing of the to-be-created Function's parameters or body text";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assertThrowsValue(() => Function("@", { toString() { throw 42; } }), 42);

/******************************************************************************/

print("Tests complete");
