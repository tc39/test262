/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
//-----------------------------------------------------------------------------

var BUGNUMBER = 885798;
var summary = "ES6 (draft April 2014) 20.1.2.10 Number.MIN_SAFE_INTEGER";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// Test value
assert.sameValue(Number.MIN_SAFE_INTEGER, -(Math.pow(2, 53) - 1));

//Test property attributes
var descriptor = Object.getOwnPropertyDescriptor(Number, 'MIN_SAFE_INTEGER');

assert.sameValue(descriptor.writable, false);
assert.sameValue(descriptor.configurable, false);
assert.sameValue(descriptor.enumerable, false);

