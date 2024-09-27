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

var gTestfile = 'preventExtensions-idempotent.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 599459;
var summary = 'Object.preventExtensions should be idempotent';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj = {};
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);

/******************************************************************************/

print("All tests passed!");
