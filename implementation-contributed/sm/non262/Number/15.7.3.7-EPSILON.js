// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Number-shell.js
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
var BUGNUMBER = 885798;
var summary = "ES6 (draft May 2013) 15.7.3.7 Number.EPSILON";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// Test value
assert.sameValue(Number.EPSILON, Math.pow(2, -52));

// Test property attributes
var descriptor = Object.getOwnPropertyDescriptor(Number, 'EPSILON');
assert.sameValue(descriptor.writable, false);
assert.sameValue(descriptor.configurable, false);
assert.sameValue(descriptor.enumerable, false);

