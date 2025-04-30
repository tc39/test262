/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [compareArray.js]
flags:
  - noStrict
description: |
  Coerce the argument passed to Object.keys using ToObject
esid: pending
---*/

assert.throws(TypeError, () => Object.keys());
assert.throws(TypeError, () => Object.keys(undefined));
assert.throws(TypeError, () => Object.keys(null));

assert.compareArray(Object.keys(1), []);
assert.compareArray(Object.keys(true), []);
if (typeof Symbol === "function") {
    assert.compareArray(Object.keys(Symbol("foo")), []);
}

assert.compareArray(Object.keys("foo"), ["0", "1", "2"]);
