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
var BUGNUMBER = 583925;
var summary =
  "parseInt should treat leading-zero inputs (with radix unspecified) as " +
  "decimal, not octal (this changed in bug 786135)";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(parseInt("08"), 8);
assert.sameValue(parseInt("09"), 9);
assert.sameValue(parseInt("014"), 14);

function strictParseInt(s) { "use strict"; return parseInt(s); }

assert.sameValue(strictParseInt("08"), 8);
assert.sameValue(strictParseInt("09"), 9);
assert.sameValue(strictParseInt("014"), 14);

/******************************************************************************/

print("All tests passed!");
