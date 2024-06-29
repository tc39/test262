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
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 518663;
var summary =
  'Object.getOwnPropertyNames should play nicely with enumerator caching';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

for (var p in JSON);
var names = Object.getOwnPropertyNames(JSON);
assert.sameValue(names.length >= 2, true,
         "wrong number of property names?  [" + names + "]");
assert.sameValue(names.indexOf("parse") >= 0, true);
assert.sameValue(names.indexOf("stringify") >= 0, true);

/******************************************************************************/

print("All tests passed!");
