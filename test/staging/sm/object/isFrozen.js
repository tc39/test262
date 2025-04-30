/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Object.isFrozen() should return true when given primitive values as input
esid: pending
---*/

assert.sameValue(Object.isFrozen(), true);
assert.sameValue(Object.isFrozen(undefined), true);
assert.sameValue(Object.isFrozen(null), true);
assert.sameValue(Object.isFrozen(1), true);
assert.sameValue(Object.isFrozen("foo"), true);
assert.sameValue(Object.isFrozen(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.isFrozen(Symbol()), true);
}
