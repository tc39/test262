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
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = 'vacuous-accessor-unqualified-name.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 560216;
var summary =
  "Using a name referring to a { get: undefined, set: undefined } descriptor " +
  "shouldn't assert";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

Object.defineProperty(this, "x", { set: undefined, configurable: true });
x;

/******************************************************************************/

print("All tests passed!");
