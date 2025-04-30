/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Number.MIN_SAFE_INTEGER
esid: pending
---*/

// Test value
assert.sameValue(Number.MIN_SAFE_INTEGER, -(Math.pow(2, 53) - 1));

//Test property attributes
var descriptor = Object.getOwnPropertyDescriptor(Number, 'MIN_SAFE_INTEGER');

assert.sameValue(descriptor.writable, false);
assert.sameValue(descriptor.configurable, false);
assert.sameValue(descriptor.enumerable, false);
