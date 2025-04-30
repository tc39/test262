/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Object.freeze() should return its argument with no conversion when the argument is a primitive value
esid: pending
features: [Symbol]
---*/

assert.sameValue(Object.freeze(), undefined);
assert.sameValue(Object.freeze(undefined), undefined);
assert.sameValue(Object.freeze(null), null);
assert.sameValue(Object.freeze(1), 1);
assert.sameValue(Object.freeze("foo"), "foo");
assert.sameValue(Object.freeze(true), true);
assert.sameValue(Object.freeze(Symbol.for("foo")), Symbol.for("foo"));
