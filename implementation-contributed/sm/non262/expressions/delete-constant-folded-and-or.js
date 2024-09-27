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
var BUGNUMBER = 1183400;
var summary =
  "Deletion of a && or || expression that constant-folds to a name must not " +
  "attempt to delete the name";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

Object.defineProperty(this, "nonconfigurable", { value: 42 });
assert.sameValue(nonconfigurable, 42);

assert.sameValue(delete nonconfigurable, false);
assert.sameValue(delete (true && nonconfigurable), true);

function nested()
{
  assert.sameValue(delete nonconfigurable, false);
  assert.sameValue(delete (true && nonconfigurable), true);
}
nested();

function nestedStrict()
{
  "use strict";
  assert.sameValue(delete (true && nonconfigurable), true);
}
nestedStrict();

/******************************************************************************/

print("Tests complete");
