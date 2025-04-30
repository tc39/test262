/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Object.isSealed() should return true when given primitive values as input
esid: pending
---*/

assert.sameValue(Object.isSealed(), true);
assert.sameValue(Object.isSealed(undefined), true);
assert.sameValue(Object.isSealed(null), true);
assert.sameValue(Object.isSealed(1), true);
assert.sameValue(Object.isSealed("foo"), true);
assert.sameValue(Object.isSealed(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.isSealed(Symbol()), true);
}
