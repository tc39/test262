/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Number.EPSILON
esid: pending
---*/

// Test value
assert.sameValue(Number.EPSILON, Math.pow(2, -52));

// Test property attributes
var descriptor = Object.getOwnPropertyDescriptor(Number, 'EPSILON');
assert.sameValue(descriptor.writable, false);
assert.sameValue(descriptor.configurable, false);
assert.sameValue(descriptor.enumerable, false);
