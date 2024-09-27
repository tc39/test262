// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-JSON-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = "parse-array-gc.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 852563;
var summary =
  "IdValuePair::value should be initialized to avoid GC sequence-point issues";

print(BUGNUMBER + ": " + summary);

print("Note: You must run this test under valgrind to be certain it passes");

/**************
 * BEGIN TEST *
 **************/

var x;

if (typeof gczeal === "function")
  gczeal(2, 1);
x = JSON.parse('{"foo":[]}');
Object.getPrototypeOf(x.foo) == Array.prototype;
x = JSON.parse('{"foo":[], "bar":[]}');

/******************************************************************************/

if (typeof gczeal === "function")
  gczeal(0);

print("Tests complete");
