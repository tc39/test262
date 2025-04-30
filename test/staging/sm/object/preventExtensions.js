/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Object.preventExtensions() should return its argument with no conversion when the argument is a primitive value
esid: pending
---*/

assert.sameValue(Object.preventExtensions(), undefined);
assert.sameValue(Object.preventExtensions(undefined), undefined);
assert.sameValue(Object.preventExtensions(null), null);
assert.sameValue(Object.preventExtensions(1), 1);
assert.sameValue(Object.preventExtensions("foo"), "foo");
assert.sameValue(Object.preventExtensions(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.preventExtensions(Symbol.for("foo")), Symbol.for("foo"));
}
