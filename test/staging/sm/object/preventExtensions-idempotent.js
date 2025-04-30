/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Object.preventExtensions should be idempotent
esid: pending
---*/

var obj = {};
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
