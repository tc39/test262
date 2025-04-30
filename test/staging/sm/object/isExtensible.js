/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Object.isExtensible() should return false when given primitive values as input
esid: pending
features: [Symbol]
---*/

assert.sameValue(Object.isExtensible(), false);
assert.sameValue(Object.isExtensible(undefined), false);
assert.sameValue(Object.isExtensible(null), false);
assert.sameValue(Object.isExtensible(1), false);
assert.sameValue(Object.isExtensible("foo"), false);
assert.sameValue(Object.isExtensible(true), false);
assert.sameValue(Object.isExtensible(Symbol()), false);
