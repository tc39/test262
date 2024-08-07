// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Function-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Christian Holler <decoder@own-hero.net>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 623301;
var summary = "Properly root argument names during Function()";
print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

if (typeof gczeal === "function")
  gczeal(2);

function crashMe(n)
{
  var nasty = [];
  while (n--)
    nasty.push("a" + n);
  return Function.apply(null, nasty);
}

var count = 64; // exact value not important
assert.sameValue(crashMe(count + 1).length, count);

if (typeof gczeal === "function")
    gczeal(0); // reset

/******************************************************************************/

print("All tests passed!");
