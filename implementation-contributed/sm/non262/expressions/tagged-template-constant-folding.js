// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-expressions-shell.js
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
var BUGNUMBER = 1182373;
var summary =
  "Don't let constant-folding in the MemberExpression part of a tagged " +
  "template cause an incorrect |this| be passed to the callee";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var prop = "global";

var obj = { prop: "obj", f: function() { return this.prop; } };

assert.sameValue(obj.f``, "obj");
assert.sameValue((true ? obj.f : null)``, "global");

/******************************************************************************/

print("Tests complete");
