// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-object-shell.js
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
var BUGNUMBER = 568786;
var summary =
  'Do not assert: !(attrs & (JSPROP_GETTER | JSPROP_SETTER)) with ' +
  'Object.defineProperty';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var o = { x: function(){} };
Object.defineProperty(o, "x", { get: function(){} });

/******************************************************************************/

print("All tests passed!");
