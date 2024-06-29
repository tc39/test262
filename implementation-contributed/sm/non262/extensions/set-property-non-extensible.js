// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  preventExtensions on global
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 600128;
var summary =
  "Properly handle attempted addition of properties to non-extensible objects";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var o = Object.freeze({});
for (var i = 0; i < 10; i++)
  print(o.u = "");

Object.freeze(this);
for (let j = 0; j < 10; j++)
  print(u = "");


/******************************************************************************/

print("All tests passed!");
