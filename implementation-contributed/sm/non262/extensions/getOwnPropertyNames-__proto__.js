// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
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

//-----------------------------------------------------------------------------
var BUGNUMBER = 837630;
var summary ='__proto__ should show up with O.getOwnPropertyNames(O.prototype)';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var keys = Object.getOwnPropertyNames(Object.prototype);
assert.sameValue(keys.indexOf("__proto__") >= 0, true,
         "should have gotten __proto__ as a property of Object.prototype " +
         "(got these properties: " + keys + ")");

/******************************************************************************/

print("Tests complete");
