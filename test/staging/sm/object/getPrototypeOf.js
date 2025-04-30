/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Coerce the argument passed to Object.getPrototypeOf using ToObject
esid: pending
---*/

assert.throws(TypeError, () => Object.getPrototypeOf());
assert.throws(TypeError, () => Object.getPrototypeOf(undefined));
assert.throws(TypeError, () => Object.getPrototypeOf(null));

assert.sameValue(Object.getPrototypeOf(1), Number.prototype);
assert.sameValue(Object.getPrototypeOf(true), Boolean.prototype);
assert.sameValue(Object.getPrototypeOf("foo"), String.prototype);
if (typeof Symbol === "function") {
    assert.sameValue(Object.getPrototypeOf(Symbol("foo")), Symbol.prototype);
}
