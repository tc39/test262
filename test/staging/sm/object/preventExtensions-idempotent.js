/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Object.preventExtensions should be idempotent
esid: pending
---*/

var obj = {};
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
